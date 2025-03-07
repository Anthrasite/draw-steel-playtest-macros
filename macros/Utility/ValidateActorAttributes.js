//@id=1JFEp3M9VhftSyuZ
//@name=ValidateActorAttributes
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });

function validateHasOwn(obj, propName, activeActor, isGroup = false) {
  if (!Object.hasOwn(obj, propName))
    throw `Error: ${isGroup ? `Group` : `Attribute`} "${propName}" is not defined for actor "${activeActor.name}"`;
}

function validateIsType(obj, propName, type, activeActor) {
  if (obj[propName].dtype.toLowerCase() !== type)
    throw `Error: Attribute "${propName}" for actor "${activeActor.name}" does not have "${type}" type`;
}

function validateHasOwnOfType(obj, propName, type, activeActor) {
  validateHasOwn(obj, propName, activeActor, false);
  validateIsType(obj, propName, type, activeActor);
}

function validateHasNumberWithValue(obj, propName, activeActor) {
  validateHasOwnOfType(obj, propName, `number`, activeActor, false);
  if (!obj[propName].value)
    throw `Error: Attribute "${propName}" for actor "${activeActor.name}" has no value`;
}

function validateHasNonEmptyLabel(obj, propName, activeActor) {
  if (!obj[propName].label)
    throw `Error: Attribute "${propName}" for actor "${activeActor.name}" has no label`;
}

if (!activeActor)
  throw `Error: No token is selected`;

for (const attr of [`resource`, `surges`, `victories`, `level`])
  validateHasOwnOfType(activeActor.system.attributes, attr, `number`, activeActor);
validateHasNonEmptyLabel(activeActor.system.attributes, `resource`, activeActor);
for (const attr of [`persistentCost`, `class`])
  validateHasOwnOfType(activeActor.system.attributes, attr, `string`, activeActor);

validateHasOwn(activeActor.system.groups, `characteristics`, activeActor, true);
validateHasOwn(activeActor.system.attributes, `characteristics`, activeActor);
for (const attr of [`might`, `agility`, `intuition`, `reason`, `presence`])
  validateHasNumberWithValue(activeActor.system.attributes.characteristics, attr, activeActor);

if (Object.hasOwn(activeActor.system.groups, `kitMeleeDamage`)) {
  validateHasOwn(activeActor.system.attributes, `kitMeleeDamage`, activeActor);
  for (const attr of [`tier1`, `tier2`, `tier3`])
    validateHasNumberWithValue(activeActor.system.attributes.kitMeleeDamage, attr, activeActor);
}

if (Object.hasOwn(activeActor.system.groups, `kitRangedDamage`)) {
  validateHasOwn(activeActor.system.attributes, `kitRangedDamage`, activeActor);
  for (const attr of [`tier1`, `tier2`, `tier3`])
    validateHasNumberWithValue(activeActor.system.attributes.kitRangedDamage, attr, activeActor);
}
