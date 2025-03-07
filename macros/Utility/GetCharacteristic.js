//@id=EaepUHVgCtZ65Sih
//@name=GetCharacteristic
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
const characteristicName = await game.macros.getName(`ValidateParameter`).execute({ name: `characteristicName`, value: scope.characteristicName, type: `string` });

return activeActor.system.attributes.characteristics[characteristicName.toLowerCase()].value;
