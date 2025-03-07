const attributeName = await game.macros.getName(`ValidateParameter`).execute({ name: `attributeName`, value: scope.attributeName, type: `string` });

let attribute = undefined;

if (!actor)
  throw `Error: No token is selected`;
else if (attributeName === `health`)
  attribute = actor.system.health;
else if (attributeName === `recoveries`)
  attribute = actor.system.power;
else {
  if (!Object.hasOwn(actor.system.attributes, attributeName))
    throw `Error: Attribute "${attributeName}" doesn't exist for ${actor.name}`;
  else
    attribute = actor.system.attributes[attributeName];
}

return attribute;