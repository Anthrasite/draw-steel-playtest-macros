//@id=4ldruWznMIR26JA5
//@name=End persistent effect
//@img=icons/magic/light/hand-sparks-smoke-teal.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const resourceLabel = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `resource` })).label;
  const selectedAbilities = await game.macros.getName("ShowPersistentCostDialog").execute({ activeActor, label: `Persistent effects to end`, resourceLabel });
  if (!selectedAbilities)
    ui.notifications.info(`No active persistent effects!`);
  else
    for (const abilityName of selectedAbilities)
      await game.macros.getName(`UpdatePersistentCost`).execute({ activeActor, abilityName });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
