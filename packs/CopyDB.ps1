$foundryVTTInstall = "$env:LOCALAPPDATA\FoundryVTT\Data\modules\draw-steel-playtest-macros"
Get-ChildItem "${foundryVTTInstall}\packs" -Filter *.db | ForEach-Object {
    Remove-Item -Path $_.FullName
}
Get-ChildItem $PSScriptRoot -Filter *.db | ForEach-Object {
  Copy-Item $_ -Destination "$foundryVTTInstall\packs"
}