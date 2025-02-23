const isMelee = await game.macros.getName(`ValidateParameter`).execute({ name: `isMelee`, value: scope.isMelee, type: `boolean` });
const tier = await game.macros.getName(`ValidateParameter`).execute({ name: `tier`, value: scope.tier, type: `number` });

const kitDamageGroupName = `kit${isMelee ? `Melee` : `Ranged`}Damage`;
const kitDamageAttributeName = `tier${tier}`;

if (!actor)
  throw `Error: No token is selected`;
else if (!Object.hasOwn(actor.system.attributes, kitDamageGroupName))
  return 0;
else if (!Object.hasOwn(actor.system.attributes[kitDamageGroupName], kitDamageAttributeName))
  throw `Error: Attribute "${kitDamageAttributeName}" doesn't exist in attribute group "${kitDamageGroupName}" for ${actor.name}`;
else
  return actor.system.attributes[kitDamageGroupName][kitDamageAttributeName].value;