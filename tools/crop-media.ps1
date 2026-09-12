param(
  [string]$SrcDir,
  [string]$OutDir,
  [string]$Manifest,
  [string]$ReportPath
)

Add-Type -AssemblyName System.Drawing

$code = @'
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class MediaCropper
{
    static byte[] buf;
    static int stride, W, H;

    static void Load(Bitmap bmp)
    {
        W = bmp.Width; H = bmp.Height;
        BitmapData bd = bmp.LockBits(new Rectangle(0, 0, W, H), ImageLockMode.ReadOnly, PixelFormat.Format24bppRgb);
        stride = bd.Stride;
        buf = new byte[stride * H];
        Marshal.Copy(bd.Scan0, buf, 0, buf.Length);
        bmp.UnlockBits(bd);
    }

    static bool IsLight(int i)
    {
        return buf[i] >= 236 && buf[i + 1] >= 236 && buf[i + 2] >= 236;
    }

    // "top,bottom,left,right,stats" or "none,reason"
    public static string Analyze(string path)
    {
        using (Bitmap bmp = new Bitmap(path))
        {
            Load(bmp);
            int xMin = (int)(W * 0.03), xMax = (int)(W * 0.95), step = 3;

            // 1) header = the contiguous yellow strip at the very top
            int headerBottom = 0;
            int nonYellowRun = 0;
            for (int y = 0; y < H / 2; y++)
            {
                int yellow = 0, total = 0, row = y * stride;
                for (int x = xMin; x < xMax; x += step)
                {
                    int i = row + x * 3;
                    int b = buf[i], g = buf[i + 1], r = buf[i + 2];
                    total++;
                    if (r > 200 && g > 140 && b < 120) yellow++;
                }
                if ((double)yellow / total > 0.55) { nonYellowRun = 0; headerBottom = y; }
                else { nonYellowRun++; if (nonYellowRun >= 10) break; }
            }
            int top = headerBottom + 4;

            // 2) split the page into bands separated by >= 24 blank rows
            int limit = (int)(H * 0.78);
            int blankNeeded = 24;
            List<int[]> bands = new List<int[]>();
            int bandStart = -1, blankRun = 0;
            for (int y = top; y < limit; y++)
            {
                int light = 0, total = 0, row = y * stride;
                for (int x = xMin; x < xMax; x += step)
                {
                    int i = row + x * 3;
                    total++;
                    if (IsLight(i)) light++;
                }
                bool blank = (double)light / total > 0.995;
                if (blank)
                {
                    blankRun++;
                    if (bandStart >= 0 && blankRun >= blankNeeded)
                    {
                        bands.Add(new int[] { bandStart, y - blankRun });
                        bandStart = -1;
                    }
                }
                else
                {
                    if (bandStart < 0) bandStart = y;
                    blankRun = 0;
                }
                if (bands.Count >= 4) break;
            }
            if (bandStart >= 0) bands.Add(new int[] { bandStart, limit });

            // 3) classify bands: media (picture) vs text
            foreach (int[] band in bands)
            {
                int t = band[0], b2 = band[1];
                if (b2 - t < 45) continue;                     // stray divider line
                double colored = 0, nonLight = 0, cnt = 0, maxRowFill = 0;
                for (int y = t; y < b2; y += 2)
                {
                    int row = y * stride, rowNon = 0, rowCnt = 0;
                    for (int x = xMin; x < xMax; x += step)
                    {
                        int i = row + x * 3;
                        int bb = buf[i], gg = buf[i + 1], rr = buf[i + 2];
                        int mx = Math.Max(rr, Math.Max(gg, bb)), mn = Math.Min(rr, Math.Min(gg, bb));
                        cnt++; rowCnt++;
                        if (!IsLight(i)) { nonLight++; rowNon++; }
                        if (mx - mn > 40) colored++;
                    }
                    double f = (double)rowNon / rowCnt;
                    if (f > maxRowFill) maxRowFill = f;
                }
                double cf = colored / cnt, nf = nonLight / cnt;
                bool isMedia = (cf > 0.02) || (nf > 0.22) || (maxRowFill > 0.30);
                string stats = string.Format("cf={0:0.000};nf={1:0.000};mr={2:0.000}", cf, nf, maxRowFill);
                if (isMedia)
                {
                    int left = W, right = 0;
                    for (int x = 0; x < W; x++)
                    {
                        bool ink = false;
                        for (int y = t; y < b2; y += 3)
                            if (!IsLight(y * stride + x * 3)) { ink = true; break; }
                        if (ink) { if (x < left) left = x; if (x > right) right = x; }
                    }
                    if (right <= left) { left = 0; right = W - 1; }
                    return "ok," + t + "," + b2 + "," + left + "," + right + "," + stats;
                }
                return "none,text-first," + t + "," + b2 + "," + stats;   // first real band is the question text
            }
            return "none,empty,0,0,-";
        }
    }

    public static void Crop(string src, string dst, int top, int bottom, int left, int right, int maxWidth)
    {
        using (Bitmap bmp = new Bitmap(src))
        {
            int pad = 6;
            left = Math.Max(0, left - pad); right = Math.Min(bmp.Width - 1, right + pad);
            top = top + 3; bottom = Math.Min(bmp.Height - 1, bottom + pad);
            int w = right - left + 1, h = bottom - top;
            using (Bitmap part = bmp.Clone(new Rectangle(left, top, w, h), PixelFormat.Format24bppRgb))
            {
                double scale = w > maxWidth ? (double)maxWidth / w : 1.0;
                int nw = (int)Math.Round(w * scale), nh = (int)Math.Round(h * scale);
                using (Bitmap outBmp = new Bitmap(nw, nh))
                using (Graphics g = Graphics.FromImage(outBmp))
                {
                    g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
                    g.PixelOffsetMode = System.Drawing.Drawing2D.PixelOffsetMode.HighQuality;
                    g.DrawImage(part, 0, 0, nw, nh);
                    ImageCodecInfo jpeg = null;
                    foreach (ImageCodecInfo ci in ImageCodecInfo.GetImageEncoders())
                        if (ci.MimeType == "image/jpeg") jpeg = ci;
                    EncoderParameters ep = new EncoderParameters(1);
                    ep.Param[0] = new EncoderParameter(Encoder.Quality, 85L);
                    outBmp.Save(dst, jpeg, ep);
                }
            }
        }
    }
}
'@


Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing


$rows = Get-Content -LiteralPath $Manifest
$report = New-Object System.Collections.Generic.List[string]
foreach ($row in $rows) {
    if ([string]::IsNullOrWhiteSpace($row)) { continue }
    $parts = $row -split "`t"
    $cat = $parts[0]
    $relFile = $parts[1]
    $id = $parts[2]
    $num = $parts[3]
    $src = Join-Path $SrcDir $relFile
    if (-not (Test-Path -LiteralPath $src)) {
        $report.Add("$id`tMISSING_SRC`t$relFile")
        continue
    }
    $res = [MediaCropper]::Analyze($src)
    $f = $res -split ','
    if ($f[0] -eq 'ok') {
        $top = [int]$f[1]; $bottom = [int]$f[2]; $left = [int]$f[3]; $right = [int]$f[4]
        $dst = Join-Path $OutDir ("$id.jpg")
        [MediaCropper]::Crop($src, $dst, $top, $bottom, $left, $right, 900)
        $report.Add("$id`tok`t$top`t$bottom`t$($bottom-$top)`t$left`t$right`t$($f[5])")
    } else {
        $report.Add("$id`tnone`t$($f[1])`t$($f[2])`t$($f[3])`t$($f[4])")
    }
}
$report | Set-Content -LiteralPath $ReportPath -Encoding utf8
"done: $($rows.Count) rows"
