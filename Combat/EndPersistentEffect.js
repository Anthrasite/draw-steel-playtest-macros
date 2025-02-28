try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const resourceLabel = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` })).label;
  const selectedAbilities = await game.macros.getName("ShowPersistentCostDialog").execute({ label: `Persistent effects to end`, resourceLabel });
  if (!selectedAbilities)
    ui.notifications.info(`No active persistent effects!`);
  else
    for (const abilityName of selectedAbilities)
      await game.macros.getName(`UpdatePersistentCost`).execute({ abilityName });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}