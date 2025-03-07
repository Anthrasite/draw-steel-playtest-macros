//@id=EaepUHVgCtZ65Sih
//@name=GetCharacteristic
//@img=icons/svg/dice-target.svg
const characteristicName = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `characteristicName`, value: scope.characteristicName, type: `string` });

return actor.system.attributes.characteristics[characteristicName.toLowerCase()].value;
