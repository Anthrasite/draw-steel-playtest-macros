//@id=D6zoUBTvy8YqVhKc
//@name=UpdatePersistentCost
//@img=icons/svg/dice-target.svg
const abilityName = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `abilityName`, value: scope.abilityName, type: `string`, nullable: true });
const cost = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `cost`, value: scope.cost, type: `number`, nullable: true });

if (cost && !abilityName)
  throw `Error: Cost with no ability name`;

let value = ``;
if (abilityName) {
  const persistentCosts = await game.dsmacros.executeMacroFromCompendium(`GetPersistentCost`);

  if (cost)
    persistentCosts[abilityName] = cost;
  else
    delete persistentCosts[abilityName];

  value = Object.entries(persistentCosts).map(([k,v]) => `${k}:${v}`).join(';');
}

const attributeName = `persistentCost`;
const attributePath = `system.attributes.${attributeName}.value`;

await actor.update({ [attributePath]: value });

return await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName });
