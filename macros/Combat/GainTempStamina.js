//@id=hmxXiT9slLJFPp4w
//@name=Gain temporary stamina
//@img=icons/magic/defensive/shield-barrier-glowing-blue.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const tempStaminaGained = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Temporary stamina`, label: `Temporary stamina gained`, allowNegative: false }));

  if (tempStaminaGained > 0)
    await game.macros.getName(`UpdateTempStamina`).execute({ activeActor, value: tempStaminaGained });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
