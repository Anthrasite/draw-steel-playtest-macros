function getLabel(isGroup) {
  return isGroup ? `Group` : `Attribute`;
}

function validateHasOwn(obj, propName, actor, isGroup = false) {
  if (!Object.hasOwn(obj, propName))
    throw `Error: ${getLabel(isGroup)} "${propName}" is not defined for actor "${actor.name}"`;
}

function validateIsNumber(obj, propName, actor, isGroup = false) {
  if (obj[propName].dtype !== `Number`)
    throw `Error: ${getLabel(isGroup)} "${propName}" for actor "${actor.name}" does not have "Number" type`;
}

function validateHasNumber(obj, propName, actor, isGroup = false) {
  validateHasOwn(obj, propName, actor, isGroup);
  validateIsNumber(obj, propName, actor, isGroup);
}

function validateHasNumberWithValue(obj, propName, actor) {
  validateHasOwn(obj, propName, actor, false);
  validateIsNumber(obj, propName, actor, false);
  if (!obj[propName].value)
    throw `Error: Attribute "${propName}" for actor "${actor.name}" has no value`;
}

function validateHasNonEmptyLabel(obj, propName, actor, isGroup = false) {
  if (!obj[propName].label)
    throw `Error: ${getLabel(isGroup)} "${propName}" for actor "${actor.name}" has no label`;
}

if (!actor)
  throw `Error: No token is selected`;

for (const attr of [`resource`, `surges`, `victories`, `persistentCost`])
  validateHasNumber(actor.system.attributes, attr, actor);
validateHasNonEmptyLabel(actor.system.attributes, `resource`, actor);

validateHasNumber(actor.system.groups, `characteristics`, actor, true);
validateHasOwn(actor.system.attributes, `characteristics`, actor);
for (const attr of [`might`, `agility`, `intuition`, `reason`, `presence`])
  validateHasNumberWithValue(actor.system.attributes.characteristics, attr, actor);

if (Object.hasOwn(actor.system.groups, `kitMeleeDamage`)) {
  validateIsNumber(actor.system.groups, `kitMeleeDamage`, actor, true);
  validateHasOwn(actor.system.attributes, `kitMeleeDamage`, actor);
  for (const attr of [`tier1`, `tier2`, `tier3`])
    validateHasNumberWithValue(actor.system.attributes.kitMeleeDamage, attr, actor);
}

if (Object.hasOwn(actor.system.groups, `kitRangedDamage`)) {
  validateIsNumber(actor.system.groups, `kitRangedDamage`, actor, true);
  validateHasOwn(actor.system.attributes, `kitRangedDamage`, actor);
  for (const attr of [`tier1`, `tier2`, `tier3`])
    validateHasNumberWithValue(actor.system.attributes.kitRangedDamage, attr, actor);
}
