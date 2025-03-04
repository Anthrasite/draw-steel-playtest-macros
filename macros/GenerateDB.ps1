$packsJson = @()
$macroIds = @()

Get-ChildItem $PSScriptRoot -Directory -Recurse | ForEach-Object {
    $dirPath = $_
    $dirName = Split-Path $_ -Leaf
    $dbFileContents = ""

    # Delete all existing db files
    Get-ChildItem $_ -Filter *.db | ForEach-Object {
        Remove-Item -Path $_.FullName
    }

    # Add all js files to the new db file
    Get-ChildItem $_ -Filter *.js | ForEach-Object {
        if ($_.BaseName.StartsWith("_"))
            { return }

        $fileContents = Get-Content $_
        $updateFile = $false

        # Get the existing icon path or use a default icon path based on the directory
        $imgPath = $null
        $imgMatches = Select-String -Path $_ '//@img=([^\r\n]*)' -AllMatches
        if ($imgMatches.Length -gt 0)
            { $imgPath = $imgMatches[0].Matches[0].Groups[1].Value }
        else {
            $imgPath = switch ($dirName) {
                "Ancestry_Devil" { "icons/creatures/unholy/demon-female-succubus-orange.webp" }
                "Ancestry_Dwarf" { "icons/magic/earth/strike-fist-stone.webp" }
                "Ancestry_Human" { "icons/environment/people/commoner.webp" }
                "Class_Censor" { "icons/magic/holy/barrier-shield-winged-blue.webp" }
                "Class_Elementalist" { "icons/magic/nature/beam-hand-leaves-green.webp" }
                "Class_Shadow" { "icons/magic/unholy/silhouette-robe-evil-power.webp" }
                "Complications" { "icons/magic/control/debuff-chains-shackles-movement-blue.webp" }
                "Kits" { "icons/equipment/shield/buckler-boss-iron-wood-brown.webp" }
                "Perks" { "icons/magic/light/hand-sparks-glow-yellow.webp" }
                default { "icons/svg/dice-target.svg" }
            }

            $fileContents = ,"//@img=${imgPath}" + $fileContents
            $updateFile = $true
        }

        # Get the existing name, try to get the name from the macro, or use the file name
        $name = $_.BaseName
        $nameMatches = Select-String -Path $_ '//@name=([^\r\n]*)' -AllMatches
        if ($nameMatches.Length -gt 0)
            { $name = $nameMatches[0].Matches[0].Groups[1].Value }
        else {
            $nameMatches = Select-String -Path $_ '^\s*name:\s*["`]([^"`]*)["`]' -AllMatches
            if ($nameMatches.Length -gt 0)
                { $name = $nameMatches[0].Matches[0].Groups[1].Value }

            $fileContents = ,"//@name=${name}" + $fileContents
            $updateFile = $true
        }

        # Get the existing id from the file, or generate a new id and prepend it to the file
        $id = $null
        $idMatches = Select-String -Path $_ '//@id=([^\r\n]*)' -AllMatches
        if ($idMatches.Length -gt 0)
            { $id = $idMatches[0].Matches[0].Groups[1].Value }
        else {
            $charSet = [Char[]]'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            $id = (Get-Random -Count 16 -InputObject $charSet) -join ''

            $fileContents = ,"//@id=${id}" + $fileContents
            $updateFile = $true
        }

        # Ensure this id doesn't already exist
        if ($macroIds -contains $id) {
            Write-Host "Error: Multiple macros with id $id"
            Exit
        }
        $macroIds += $id

        # Get the file contents as a single string, escaping slashes, quotes, and newlines
        $command = $fileContents | ForEach-Object{
            $_.replace("\", "\\").replace("`"", "\`"")
        } | Join-String -Separator "\n"

        $dbFileContents = $dbFileContents + "{ `"_id`": `"${id}`", `"name`": `"${name}`", `"scope`": `"global`", `"type`": `"script`", `"permission`": { `"default`": 0 }, `"img`": `"${imgPath}`", `"command`": `"${command}`" }`n"

        if ($updateFile)
            { $fileContents | Set-Content $_ }
    }

    # If the db file isn't empty (i.e. there were js files in this directory), create pack JSON and a db file
    if ($dbFileContents.length -gt 0) {
        $packPath = ($_ | Resolve-Path -Relative).substring(2)

        $packName = $dirName
        $packLabel = $packName.replace("_", " - ")
        $packDBFileName = "${packName}_macros.db"

        $packsJson += @{
            "name" = $packName
            "label" = $packLabel
            "path" = "macros\${packPath}\${packDBFileName}"
            "type" = "Macro"
        }

        New-Item "$_\${packDBFileName}" -ItemType File -Force -Value $dbFileContents | Out-Null
    }
}

# Output the packs JSON to the console, and save it to the clipboard
$json = @{ "packs" = $packsJson } | ConvertTo-Json -Depth 10
Write-Host $json
Set-Clipboard $json
