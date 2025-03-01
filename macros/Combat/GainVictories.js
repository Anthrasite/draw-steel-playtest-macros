try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const victoriesGained = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Victories`, label: `Victories gained`, defaultValue: 1, allowNegative: false }));

  if (victoriesGained > 0)
    await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `victories`, value: victoriesGained, isDelta: true });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}