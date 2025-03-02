//@id=KGDuPqc5fwtSdWoI
//@name=EndPersistentEffect
//@img=icons/svg/dice-target.svg
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes");

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
