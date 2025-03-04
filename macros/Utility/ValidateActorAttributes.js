//@id=1JFEp3M9VhftSyuZ
//@name=ValidateActorAttributes
//@img=icons/svg/dice-target.svg
function validateHasOwn(obj, propName, actor, isGroup = false) {
  if (!Object.hasOwn(obj, propName))
    throw `Error: ${isGroup ? `Group` : `Attribute`} "${propName}" is not defined for actor "${actor.name}"`;
}

function validateIsType(obj, propName, type, actor) {
  if (obj[propName].dtype.toLowerCase() !== type)
    throw `Error: Attribute "${propName}" for actor "${actor.name}" does not have "${type}" type`;
}

function validateHasOwnOfType(obj, propName, type, actor) {
  validateHasOwn(obj, propName, actor, false);
  validateIsType(obj, propName, type, actor);
}

function validateHasNumberWithValue(obj, propName, actor) {
  validateHasOwnOfType(obj, propName, `number`, actor, false);
  if (!obj[propName].value)
    throw `Error: Attribute "${propName}" for actor "${actor.name}" has no value`;
}

function validateHasNonEmptyLabel(obj, propName, actor) {
  if (!obj[propName].label)
    throw `Error: Attribute "${propName}" for actor "${actor.name}" has no label`;
}

if (!actor)
  throw `Error: No token is selected`;

for (const attr of [`resource`, `surges`, `victories`, `level`])
  validateHasOwnOfType(actor.system.attributes, attr, `number`, actor);
validateHasNonEmptyLabel(actor.system.attributes, `resource`, actor);
for (const attr of [`persistentCost`, `class`])
  validateHasOwnOfType(actor.system.attributes, attr, `string`, actor);

validateHasOwn(actor.system.groups, `characteristics`, actor, true);
validateHasOwn(actor.system.attributes, `characteristics`, actor);
for (const attr of [`might`, `agility`, `intuition`, `reason`, `presence`])
  validateHasNumberWithValue(actor.system.attributes.characteristics, attr, actor);

if (Object.hasOwn(actor.system.groups, `kitMeleeDamage`)) {
  validateHasOwn(actor.system.attributes, `kitMeleeDamage`, actor);
  for (const attr of [`tier1`, `tier2`, `tier3`])
    validateHasNumberWithValue(actor.system.attributes.kitMeleeDamage, attr, actor);
}

if (Object.hasOwn(actor.system.groups, `kitRangedDamage`)) {
  validateHasOwn(actor.system.attributes, `kitRangedDamage`, actor);
  for (const attr of [`tier1`, `tier2`, `tier3`])
    validateHasNumberWithValue(actor.system.attributes.kitRangedDamage, attr, actor);
}
