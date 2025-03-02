//@id=4ldruWznMIR26JA5
//@name=End persistent effect
//@img=icons/magic/light/hand-sparks-smoke-teal.webp
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const resourceLabel = (await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `resource` })).label;
  const selectedAbilities = await game.dsmacros.executeMacroFromCompendium("ShowPersistentCostDialog", { label: `Persistent effects to end`, resourceLabel });
  if (!selectedAbilities)
    ui.notifications.info(`No active persistent effects!`);
  else
    for (const abilityName of selectedAbilities)
      await game.dsmacros.executeMacroFromCompendium(`UpdatePersistentCost`, { abilityName });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
