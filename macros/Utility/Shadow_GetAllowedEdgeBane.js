//@id=rVNDMRijQULt184Y
//@name=Shadow_GetAllowedEdgeBane
//@img=icons/svg/dice-target.svg
const defaultResourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `defaultResourceCost`, value: scope.defaultResourceCost, type: `number` });
const currResourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `currResourceCost`, value: scope.currResourceCost, type: `number` });

return defaultResourceCost > currResourceCost ? ['de', 'e'] : ['n', 'b', 'db'];
