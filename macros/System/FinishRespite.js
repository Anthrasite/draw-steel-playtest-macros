//@id=MTiZh1m65PrJt0Uy
//@name=Finish respite
//@img=icons/consumables/food/bowl-stew-tofu-potato-red.webp
try {
  const activeActor = actor;
  await game.macros.getName(`ValidateActorAttributes`).execute({ activeActor });

  const maxStamina = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `stamina` })).max;
  await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `stamina`, value: maxStamina });

  const maxRecoveries = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `recoveries` })).max;
  await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `recoveries`, value: maxRecoveries });

  const currVictories = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `victories` })).value;
  await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `victories`, value: 0 });

  const currXP = (await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `xp`, value: currVictories, isDelta: true })).value;
  await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `level`, value: Math.floor(currXP / 16) + 1 });
}
catch (error) {
  ui.notifications.error(error);
}
