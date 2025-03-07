//@id=dlDYABs6ha9yUIOr
//@name=ValidateParameter
//@img=icons/svg/dice-target.svg
const name = scope.name;
const value = scope.value;
const type = scope.type;
const nullable = scope.nullable ?? false;

function throwError(name, type) {
  throw `Error: ${name} is not a valid ${type}`;
}

function validateString(name, value) {
  if (typeof(value) !== `string` || value.length === 0)
    throwError(name, `non-empty string`);
}
function validateBoolean(name, value) {
  if (typeof(value) !== `boolean`)
    throwError(name, `boolean`);
}

validateString(`name`, name);
validateString(`type`, type);
validateBoolean(`boolean`, nullable);

if (!nullable || typeof(value) !== `undefined`) {
  if (type === `string`)
    validateString(name, value);
  else if (type === `boolean`)
    validateBoolean(name, value);
  else if (type === `number`) {
    if (typeof(value) !== `number` || isNaN(value))
      throwError(name, `number`);
  }
  else if (type === `function`) {
    if (typeof(value) !== `function`)
      throwError(name, `function`);
  }
  else if (type === `object`) {
    if (typeof(value) !== `object`)
      throwError(name, `object`);
  }
  else
    throw `Error: Parameter type is unsupported`;
}

return value;
