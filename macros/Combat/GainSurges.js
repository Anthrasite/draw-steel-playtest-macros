//@id=2goha35ftCeBsPiS
//@name=Gain surges
//@img=icons/magic/sonic/explosion-shock-wave-teal.webp
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes");

  const surgesGained = Number(await game.dsmacros.executeMacroFromCompendium(`ShowSimpleInputDialog`, { title: `Surges`, label: `Surges gained`, defaultValue: 1, allowNegative: false }));

  if (surgesGained > 0)
    await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `surges`, value: surgesGained, isDelta: true });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
