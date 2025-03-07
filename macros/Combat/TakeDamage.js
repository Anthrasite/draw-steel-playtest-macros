//@id=Lh7ZOYjE2msPSG6U
//@name=Take damage
//@img=icons/skills/wounds/injury-triple-slash-bleed.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const damageTaken = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ label: `Damage taken`, allowNegative: false }));

  if (damageTaken > 0) {
    let remainingDamage = damageTaken;

    const tempStamina = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `tempStamina` })).value;
    if (tempStamina > 0) {
      remainingDamage = tempStamina > damageTaken ? 0 : remainingDamage - tempStamina;

      const tempStaminaLost = tempStamina > damageTaken ? damageTaken : tempStamina;
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `tempStamina`, value: -tempStaminaLost, isDelta: true });
    }

    if (remainingDamage > 0)
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `stamina`, value: -remainingDamage, isDelta: true });
  }
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
