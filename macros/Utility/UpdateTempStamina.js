//@id=C2f9bdcv7DKtawsp
//@name=UpdateTempStamina
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
const value = await game.macros.getName(`ValidateParameter`).execute({ name: `value`, value: scope.value, type: `number` });

const attributeName = `tempStamina`;
const tempStamina = await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName });
if (value > tempStamina.value)
  await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName, value });

return await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName });
