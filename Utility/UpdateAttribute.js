const attributeName = await game.macros.getName(`ValidateParameter`).execute({ name: `attributeName`, value: scope.attributeName, type: `string` });
const value = await game.macros.getName(`ValidateParameter`).execute({ name: `value`, value: scope.value, type: `number` });
const isDelta = (await game.macros.getName(`ValidateParameter`).execute({ name: `isDelta`, value: scope.isDelta, type: `boolean`, nullable: true })) ?? false;

const attribute = await game.macros.getName(`GetAttribute`).execute({ attributeName });
attribute.value = isDelta ? attribute.value + value : value;

return attribute;