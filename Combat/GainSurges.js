try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const surgesGained = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Surges`, label: `Surges gained`, defaultValue: 1, allowNegative: false }));

  if (surgesGained > 0)
    await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `surges`, value: surgesGained, isDelta: true });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}