//@id=SrhPDyZWudXBRmU6
//@name=GetAttribute
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
const attributeName = await game.macros.getName(`ValidateParameter`).execute({ name: `attributeName`, value: scope.attributeName, type: `string` });

return attributeName === `stamina` ? activeActor.system.health
  : attributeName === `recoveries` ? activeActor.system.power
  : attributeName === `tempStamina` ? activeActor.system.attributes.tempHealth
  : activeActor.system.attributes[attributeName];
