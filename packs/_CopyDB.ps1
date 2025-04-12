$foundryVTTInstall = "$env:LOCALAPPDATA\FoundryVTT\Data\modules\draw-steel-playtest-macros"
Remove-Item "$foundryVTTInstall\packs\*" -Recurse -Force
Get-ChildItem $PSScriptRoot -Filter *.db | ForEach-Object {
  Copy-Item $_ -Destination "$foundryVTTInstall\packs"
}

Remove-Item "$foundryVTTInstall\module.json"
Copy-Item "$($PSScriptRoot)\..\module.json" -Destination $foundryVTTInstall