const characteristicName = await game.macros.getName(`ValidateParameter`).execute({ name: `characteristicName`, value: scope.characteristicName, type: `string` });

return actor.system.attributes.characteristics[characteristicName.toLowerCase()].value;
