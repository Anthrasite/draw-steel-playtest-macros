//@id=GOv0CejB17b8LXMR
//@name=GetKitDamage
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
const isMelee = await game.macros.getName(`ValidateParameter`).execute({ name: `isMelee`, value: scope.isMelee, type: `boolean` });
const tier = await game.macros.getName(`ValidateParameter`).execute({ name: `tier`, value: scope.tier, type: `number` });

const kitDamageGroupName = `kit${isMelee ? `Melee` : `Ranged`}Damage`;
const kitDamageAttributeName = `tier${tier}`;

return Object.hasOwn(activeActor.system.attributes, kitDamageGroupName) ? activeActor.system.attributes[kitDamageGroupName][kitDamageAttributeName].value : 0;
