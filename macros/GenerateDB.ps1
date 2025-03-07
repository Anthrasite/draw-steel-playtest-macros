$packsJson = @()

Get-ChildItem $PSScriptRoot -Directory -Recurse | ForEach-Object {
    $dirPath = $_
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

        # Get the existing icon path or use the default icon path
        $imgPath = "icons/svg/dice-target.svg"
        $imgMatches = Select-String -Path $_ '//@img=([^\r\n]*)' -AllMatches
        if ($imgMatches.Length -gt 0)
            { $imgPath = $imgMatches[0].Matches[0].Groups[1].Value }
        else
        {
            $fileContents = ,"//@img=${imgPath}" + $fileContents
            $updateFile = $true
        }

        # Get the existing name or use the file name
        $name = $_.BaseName
        $nameMatches = Select-String -Path $_ '//@name=([^\r\n]*)' -AllMatches
        if ($nameMatches.Length -gt 0)
            { $name = $nameMatches[0].Matches[0].Groups[1].Value }
        else
        {
            $fileContents = ,"//@name=${name}" + $fileContents
            $updateFile = $true
        }

        # Get the existing id from the file, or generate a new id and prepend it to the file
        $id = ""
        $idMatches = Select-String -Path $_ '//@id=([^\r\n]*)' -AllMatches
        if ($idMatches.Length -gt 0)
            { $id = $idMatches[0].Matches[0].Groups[1].Value }
        else
        {
            $charSet = [Char[]]'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            $id = (Get-Random -Count 16 -InputObject $charSet) -join ''

            $fileContents = ,"//@id=${id}" + $fileContents
            $updateFile = $true
        }

        # Get the file contents as a single string, escaping slashes, quotes, and newlines
        $command = $fileContents | ForEach-Object {
            $_.replace("\", "\\").replace("`"", "\`"")
        } | Join-String -Separator "\n"

        $dbFileContents = $dbFileContents + "{ `"_id`": `"${id}`", `"name`": `"${name}`", `"scope`": `"global`", `"type`": `"script`", `"permission`": { `"default`": 0 }, `"img`": `"${imgPath}`", `"command`": `"${command}`" }`n"

        if ($updateFile)
            { $fileContents | Set-Content $_ }
    }

    # If the db file isn't empty (i.e. there were js files in this directory), create pack JSON and a db file
    if ($dbFileContents.length -gt 0) {
        $packPath = ($_ | Resolve-Path -Relative).substring(2)

        $packName = Split-Path $_ -Leaf
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
