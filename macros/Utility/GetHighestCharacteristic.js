//@id=FKAi1azHUJEo5Oyl
//@name=GetHighestCharacteristic
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
const powerRollStat = await game.macros.getName(`ValidateParameter`).execute({ name: `powerRollStat`, value: scope.powerRollStat, type: `string`, nullable: true });

let highestValue = -5;
const currCharacteristics = activeActor.system.attributes.characteristics;
for (const [charName, char] of Object.entries(currCharacteristics))
  if ((typeof(powerRollStat) === `undefined` || powerRollStat.toLowerCase().includes(charName)) && char.value > highestValue)
    highestValue = char.value;

return Math.min(highestValue, 5);
