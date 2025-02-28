const abilityName = await game.macros.getName(`ValidateParameter`).execute({ name: `abilityName`, value: scope.abilityName, type: `string`, nullable: true });
const cost = await game.macros.getName(`ValidateParameter`).execute({ name: `cost`, value: scope.cost, type: `number`, nullable: true });

if (cost && !abilityName)
  throw `Error: Cost with no ability name`;

let value = ``;
if (abilityName) {
  const persistentCosts = await game.macros.getName(`GetPersistentCost`).execute();

  if (cost)
    persistentCosts[abilityName] = cost;
  else
    delete persistentCosts[abilityName];

  value = Object.entries(persistentCosts).map(([k,v]) => `${k}:${v}`).join(';');
}

const attributeName = `persistentCost`;
const attributePath = `system.attributes.${attributeName}.value`;

await actor.update({ [attributePath]: value });

return await game.macros.getName(`GetAttribute`).execute({ attributeName });