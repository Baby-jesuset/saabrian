Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$src = Join-Path $root "assets\source-images"
$dst = Join-Path $root "public\_astro"

if (-not (Test-Path $dst)) { New-Item -ItemType Directory -Path $dst | Out-Null }

# Brand assets
Copy-Item (Join-Path $src "logo-white.svg") (Join-Path $dst "logo-white.svg") -Force
Copy-Item (Join-Path $src "favicon.svg") (Join-Path $root "public\favicon.svg") -Force

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" } |
  Select-Object -First 1

function Save-Jpeg($bitmap, $outPath, $quality) {
  $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality,
    [long]$quality
  )
  $bitmap.Save($outPath, $jpegCodec, $params)
  $params.Dispose()
}

function New-FittedBitmap($inPath, $targetW, $targetH, $bg) {
  $img = [System.Drawing.Image]::FromFile($inPath)
  $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear($bg)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  $scale = [Math]::Min($targetW / $img.Width, $targetH / $img.Height)
  $w = [int]($img.Width * $scale)
  $h = [int]($img.Height * $scale)
  $x = [int](($targetW - $w) / 2)
  $y = [int](($targetH - $h) / 2)

  $g.DrawImage($img, $x, $y, $w, $h)
  $g.Dispose()
  $img.Dispose()
  return $bmp
}

# Project screenshots -> 1600x900 JPEG with dark padding (no cropping)
$map = [ordered]@{
  "PHOTOGRAPHER PORTIFOLIO.png"      = "project-photographer.jpg"
  "JUNIOR AI.png"                    = "project-junior-ai.jpg"
  "MKRT EDGE.png"                    = "project-mrkt-edge.jpg"
  "MKRT EDGE DASHBOARD.png"          = "project-mrkt-edge-terminal.jpg"
  "BWINDII UPGRADE.png"              = "project-bwindi.jpg"
  "PEARL BRIGDE LOANS DASHBOARD.png" = "project-pearl-bridge.jpg"
  "FB ECOMMERCE SITE.png"            = "project-fb-hardware.jpg"
  "MY PORTIFOLIO.png"                = "project-portfolio.jpg"
}

$targetW = 1600
$targetH = 900
$bg = [System.Drawing.ColorTranslator]::FromHtml("#0b120d")

foreach ($name in $map.Keys) {
  $inPath = Join-Path $src $name
  $outPath = Join-Path $dst $map[$name]

  $bmp = New-FittedBitmap $inPath $targetW $targetH $bg
  Save-Jpeg $bmp $outPath 88
  $bmp.Dispose()

  $size = (Get-Item $outPath).Length
  Write-Output ("Wrote {0} ({1}x{2}, {3:N0} KB)" -f $map[$name], $targetW, $targetH, ($size / 1KB))
}

# Large feature image for the "Stop fighting your tools" section (5:4 frame)
$featureOut = Join-Path $dst "problem-dashboard.jpg"
$bmp = New-FittedBitmap (Join-Path $src "MKRT EDGE DASHBOARD.png") 1500 1200 $bg
Save-Jpeg $bmp $featureOut 88
$bmp.Dispose()
$size = (Get-Item $featureOut).Length
Write-Output ("Wrote problem-dashboard.jpg (1500x1200, {0:N0} KB)" -f ($size / 1KB))

# Location image for the About page (5:4 frame)
$locationOut = Join-Path $dst "about-location.jpg"
$bmp = New-FittedBitmap (Join-Path $src "PEARL BRIGDE LOANS DASHBOARD.png") 1500 1200 $bg
Save-Jpeg $bmp $locationOut 88
$bmp.Dispose()
$size = (Get-Item $locationOut).Length
Write-Output ("Wrote about-location.jpg (1500x1200, {0:N0} KB)" -f ($size / 1KB))

# ---------- Portrait photography (card faces + home About tile) ----------
# Source photos live next to the images folder, not inside it.
$photoSrc = $src

# Fills the frame and crops the overflow, biased vertically by $focusY
# (0 = keep the top of the photo, 1 = keep the bottom).
function New-CroppedBitmap($inPath, $targetW, $targetH, $focusY, $gamma = 1) {
  $img = [System.Drawing.Image]::FromFile($inPath)
  $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  $scale = [Math]::Max($targetW / $img.Width, $targetH / $img.Height)
  $w = [int][Math]::Ceiling($img.Width * $scale)
  $h = [int][Math]::Ceiling($img.Height * $scale)
  $x = [int](($targetW - $w) / 2)
  $y = [int](($targetH - $h) * $focusY)

  if ($gamma -ne 1) {
    $attr = New-Object System.Drawing.Imaging.ImageAttributes
    $attr.SetGamma($gamma)
    $dest = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $g.DrawImage(
      $img, $dest, 0, 0, $img.Width, $img.Height,
      [System.Drawing.GraphicsUnit]::Pixel, $attr
    )
    $attr.Dispose()
  } else {
    $g.DrawImage($img, $x, $y, $w, $h)
  }

  $g.Dispose()
  $img.Dispose()
  return $bmp
}

# Lanyard card faces: 1.6 x 2.25 card aspect, 900 x 1266.
$cardW = 900
$cardH = 1266
$cardMap = [ordered]@{
  "lanyard frontimage.png" = @{ file = "lanyard-front.jpg"; gamma = 1.35 }
  "lanyard backimage.png"  = @{ file = "lanyard-back.jpg"; gamma = 1.0 }
}

foreach ($name in $cardMap.Keys) {
  $inPath = Join-Path $photoSrc $name
  $entry = $cardMap[$name]
  $outPath = Join-Path $dst $entry.file

  $bmp = New-CroppedBitmap $inPath $cardW $cardH 0.4 $entry.gamma
  Save-Jpeg $bmp $outPath 88
  $bmp.Dispose()

  $size = (Get-Item $outPath).Length
  Write-Output ("Wrote {0} ({1}x{2}, {3:N0} KB)" -f $entry.file, $cardW, $cardH, ($size / 1KB))
}

# Static portrait for the home page About tile: 3:4 frame, 1200 x 1600.
$portraitOut = Join-Path $dst "portrait-brian.jpg"
$bmp = New-CroppedBitmap (Join-Path $photoSrc "lanyard backimage.png") 1200 1600 0.3
Save-Jpeg $bmp $portraitOut 88
$bmp.Dispose()
$size = (Get-Item $portraitOut).Length
Write-Output ("Wrote portrait-brian.jpg (1200x1600, {0:N0} KB)" -f ($size / 1KB))

# Remove the old PNG versions so the folder stays clean.
Get-ChildItem $dst -Filter "project-*.png" | Remove-Item -Force
Remove-Item (Join-Path $dst "problem-dashboard.png") -Force -ErrorAction SilentlyContinue
