//@id=rVNDMRijQULt184Y
//@name=Shadow_GetAllowedEdgeBane
//@img=icons/svg/dice-target.svg
const defaultResourceCost = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `defaultResourceCost`, value: scope.defaultResourceCost, type: `number` });
const currResourceCost = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `currResourceCost`, value: scope.currResourceCost, type: `number` });

return defaultResourceCost > currResourceCost ? ['de', 'e'] : ['n', 'b', 'db'];
