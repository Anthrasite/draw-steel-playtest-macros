try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const gainedVictories = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Victories`, label: `Victories earned`, defaultValue: 1, allowNegative: false }));
  if (gainedVictories > 0)
    await game.macros.getName("UpdateAttribute").execute({ attributeName: "victories", value: gainedVictories, isDelta: true });

  await game.macros.getName("UpdateAttribute").execute({ attributeName: "surges", value: 0 });
  await game.macros.getName("UpdateAttribute").execute({ attributeName: "resource", value: 0 });
  await game.macros.getName("UpdatePersistentCost").execute();
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}