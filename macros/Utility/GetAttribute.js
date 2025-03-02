//@id=SrhPDyZWudXBRmU6
//@name=GetAttribute
//@img=icons/svg/dice-target.svg
const attributeName = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `attributeName`, value: scope.attributeName, type: `string` });

return attributeName === `health` ? actor.system.health
  : attributeName === `recoveries` ? actor.system.power
  : actor.system.attributes[attributeName];
