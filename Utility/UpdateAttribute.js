const attributeName = await game.macros.getName(`ValidateParameter`).execute({ name: `attributeName`, value: scope.attributeName, type: `string` });
const newValue = await game.macros.getName(`ValidateParameter`).execute({ name: `value`, value: scope.value, type: `number` });
const add = await game.macros.getName(`ValidateParameter`).execute({ name: `add`, value: scope.add, type: `boolean`, nullable: true }) ?? false;

if (!actor)
  throw `Error: No token is selected`;
else if (attributeName === `health`)
  add ? actor.system.health.value += value
    : actor.system.health.value = value;
else if (attributeName === `recoveries`)
  add ? actor.system.power.value += value
    : actor.system.power.value = value;
else {
  if (!Object.hasOwn(actor.system.attributes, attributeName))
    throw `Error: Attribute "${attributeName}" doesn't exist for ${actor.name}`;
  else
    add ? actor.system.attributes[attributeName].value += value
      : actor.system.attributes[attributeName].value = value;
}