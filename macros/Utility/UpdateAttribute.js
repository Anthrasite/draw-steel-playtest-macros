//@id=inREdrJwhy1tXNak
//@name=UpdateAttribute
//@img=icons/svg/dice-target.svg
const attributeName = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `attributeName`, value: scope.attributeName, type: `string` });
const value = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `value`, value: scope.value, type: `number` });
const isDelta = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `isDelta`, value: scope.isDelta, type: `boolean`, nullable: true })) ?? false;

const attribute = await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName });
const attributePath = attributeName === `health` ? `health`
  : attributeName === `recoveries` ? `power`
  : `attributes.${attributeName}`;

await actor.update({ [`system.${attributePath}.value`]: isDelta ? attribute.value + value : value });

return await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName });
