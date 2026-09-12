param(
  [string]$RawJsonl,
  [string]$ManifestTsv,   # data/manifest.tsv: category <tab> Asset-relative path <tab> image id <tab> num
  [string]$OutJson,
  [string]$OutJs
)

$catMap = @{ '51' = 'Intersections'; '79' = 'General Knowledge'; '21' = 'Alcohol and Drugs'; '24' = 'Fatigue and Driving' }

# Build a "category|num" -> image id lookup straight from the manifest, so this
# script is the only thing you need to run after re-cropping images.
$lookup = @{}
foreach ($row in Get-Content -LiteralPath $ManifestTsv) {
    if ([string]::IsNullOrWhiteSpace($row)) { continue }
    $p = $row -split "`t"
    $lookup["$($p[0])|$([int]$p[3])"] = $p[2]
}

$results = New-Object System.Collections.Generic.List[object]
$id = 0
foreach ($line in Get-Content -LiteralPath $RawJsonl) {
    if ([string]::IsNullOrWhiteSpace($line)) { continue }
    $obj = $line | ConvertFrom-Json
    $id++
    if ($obj.PSObject.Properties.Name -contains 'set') {
        $cat = $catMap["$($obj.set)"]
    } else {
        $cat = $obj.cat
    }
    $num = $obj.num
    $key = "$cat|$num"
    $imgid = $lookup[$key]
    if (-not $imgid) {
        Write-Warning "NO IMAGE MATCH for $key (line $id)"
    }
    $ordered = [ordered]@{
        id = $id
        cat = $cat
        img = "images/$imgid.jpg"
        num = $num
        q = $obj.q
        options = $obj.options
        answer = $obj.answer
        explain = $obj.explain
    }
    $results.Add([pscustomobject]$ordered)
}

$json = $results | ConvertTo-Json -Depth 6 -Compress:$false
Set-Content -LiteralPath $OutJson -Value $json -Encoding utf8

$js = "// Auto-generated - loaded directly so the site works from file:// too.`nwindow.QUESTIONS = " + $json + ";`n"
Set-Content -LiteralPath $OutJs -Value $js -Encoding utf8

"wrote $($results.Count) questions"
