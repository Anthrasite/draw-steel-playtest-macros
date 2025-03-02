//@id=GOv0CejB17b8LXMR
//@name=GetKitDamage
//@img=icons/svg/dice-target.svg
const isMelee = await game.macros.getName(`ValidateParameter`).execute({ name: `isMelee`, value: scope.isMelee, type: `boolean` });
const tier = await game.macros.getName(`ValidateParameter`).execute({ name: `tier`, value: scope.tier, type: `number` });

const kitDamageGroupName = `kit${isMelee ? `Melee` : `Ranged`}Damage`;
const kitDamageAttributeName = `tier${tier}`;

return Object.hasOwn(actor.system.attributes, kitDamageGroupName) ? actor.system.attributes[kitDamageGroupName][kitDamageAttributeName].value : 0;
