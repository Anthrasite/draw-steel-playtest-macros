//@id=jte0ZyibHwRUDQsM
//@name=Gain victories
//@img=icons/commodities/treasure/cup-trophy-gold.webp
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const victoriesGained = Number(await game.dsmacros.executeMacroFromCompendium(`ShowSimpleInputDialog`, { title: `Victories`, label: `Victories gained`, defaultValue: 1, allowNegative: false }));

  if (victoriesGained > 0)
    await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `victories`, value: victoriesGained, isDelta: true });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
