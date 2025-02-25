const attributeName = await game.macros.getName(`ValidateParameter`).execute({ name: `attributeName`, value: scope.attributeName, type: `string` });
const value = await game.macros.getName(`ValidateParameter`).execute({ name: `value`, value: scope.value, type: `number` });
const isDelta = (await game.macros.getName(`ValidateParameter`).execute({ name: `isDelta`, value: scope.isDelta, type: `boolean`, nullable: true })) ?? false;

const attribute = await game.macros.getName(`GetAttribute`).execute({ attributeName });
const attributePath = attributeName === `health` ? `health`
  : attributeName === `recoveries` ? `power`
  : `attributes.${attributeName}`;

await actor.update({ [`system.${attributePath}.value`]: isDelta ? attribute.value + value : value });

return await game.macros.getName(`GetAttribute`).execute({ attributeName });