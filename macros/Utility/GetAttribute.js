//@id=SrhPDyZWudXBRmU6
//@name=GetAttribute
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
const attributeName = await game.macros.getName(`ValidateParameter`).execute({ name: `attributeName`, value: scope.attributeName, type: `string` });

return attributeName === `health` ? activeActor.system.health
  : attributeName === `recoveries` ? activeActor.system.power
  : activeActor.system.attributes[attributeName];
