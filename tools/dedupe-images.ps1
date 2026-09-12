<#
Some questions share the exact same diagram/photo (the app reused it across categories, or
just used the same generic stock photo for two unrelated questions). Rather than store the
same image bytes twice, this finds byte-identical images in $ImagesDir, keeps the first one
seen as the "canonical" copy, repoints every question's "img" field at it, and deletes the
now-unused duplicate files.

Run this AFTER crop-media.ps1 + build-questions.ps1 (i.e. after any full rebuild) — a fresh
crop pass recreates every id's own file again, so duplicates need to be re-collapsed each time.
IMPORTANT: build-questions.ps1 alone (no fresh crop) also resets every "img" field back to its
own id, even for ids whose file was already deleted by a previous dedupe pass — so this script
keeps a $MapFile (default data/dedupe-map.tsv) of every mapping it has ever made and re-applies
all of them every run, not just the ones it can currently re-detect by hashing (which only
works while the duplicate file still exists on disk).
#>
param(
  [string]$ImagesDir,
  [string]$QuestionsJson,
  [string]$QuestionsJs,
  [string]$MapFile
)

if (-not $MapFile) { $MapFile = Join-Path (Split-Path $QuestionsJson) "dedupe-map.tsv" }

# 1) Load every mapping this script has ever recorded (survives files being deleted).
$canonical = @{}
if (Test-Path -LiteralPath $MapFile) {
    foreach ($row in Get-Content -LiteralPath $MapFile) {
        if ([string]::IsNullOrWhiteSpace($row)) { continue }
        $p = $row -split "`t"
        $canonical[$p[0]] = $p[1]
    }
}

# 2) Hash whatever files are still on disk and fold in any NEW duplicates found.
$hashes = @{}
$files = Get-ChildItem -LiteralPath $ImagesDir -Filter *.jpg | Sort-Object Name
foreach ($f in $files) {
    $h = (Get-FileHash -LiteralPath $f.FullName -Algorithm MD5).Hash
    $id = $f.BaseName
    if ($canonical.ContainsKey($id)) { continue }   # already a known duplicate, skip
    if ($hashes.ContainsKey($h)) {
        $canonical[$id] = $hashes[$h]
    } else {
        $hashes[$h] = $id
    }
}

if ($canonical.Count -eq 0) {
    "no duplicate images found"
    return
}

# 3) Save the (possibly grown) mapping for next time.
$mapLines = $canonical.Keys | Sort-Object | ForEach-Object { "$_`t$($canonical[$_])" }
Set-Content -LiteralPath $MapFile -Value $mapLines -Encoding utf8

# 4) Repoint every question's "img" field at its canonical id.
$json = Get-Content -LiteralPath $QuestionsJson -Raw
foreach ($dupId in $canonical.Keys) {
    $canonId = $canonical[$dupId]
    $json = $json -replace [regex]::Escape("images/$dupId.jpg"), "images/$canonId.jpg"
}
Set-Content -LiteralPath $QuestionsJson -Value $json -Encoding utf8

$js = "// Auto-generated - loaded directly so the site works from file:// too.`nwindow.QUESTIONS = " + $json + ";`n"
Set-Content -LiteralPath $QuestionsJs -Value $js -Encoding utf8

# 5) Delete duplicate files that still exist.
$deleted = 0
foreach ($dupId in $canonical.Keys) {
    $p = Join-Path $ImagesDir "$dupId.jpg"
    if (Test-Path -LiteralPath $p) { Remove-Item -LiteralPath $p -Force; $deleted++ }
}

"$($canonical.Count) questions repointed to a canonical image ($deleted duplicate file(s) deleted this run)"
