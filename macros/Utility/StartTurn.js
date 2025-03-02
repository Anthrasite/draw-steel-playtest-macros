//@id=SQXPenBmpa0GCwc3
//@name=StartTurn
//@img=icons/svg/dice-target.svg
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes");

  const resourceRoll = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `resourceRoll`, value: scope.resourceRoll, type: `string`, nullable: true })) ?? `1d3`;

  const resourceAttribute = await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `resource` });

  // If any persistent abilities are active, show a selector for those that should be maintained, and calculate the cost
  let persistentCost = 0;
  const currPersistentCosts = await game.dsmacros.executeMacroFromCompendium(`GetPersistentCost`);
  if (Object.keys(currPersistentCosts).length) {
    if (resourceRoll.includes("d"))
      throw `Error: Handling of persistent effects with variable resource gain is not implemented`;

    const abilitiesToMaintain = await game.dsmacros.executeMacroFromCompendium("ShowPersistentCostDialog", { label: `Persistent effects to maintain`, resourceLabel: resourceAttribute.label, selectByDefault: true });
    for (const abilityName of abilitiesToMaintain)
      persistentCost += currPersistentCosts[abilityName];

    if (resourceRoll - persistentCost < 0) {
      ui.notifications.error(`Not enough ${resourceAttribute.label} to maintain all persistent effects!`);
      return;
    }

    for (const [abilityName, cost] of Object.entries(currPersistentCosts))
      if (!abilitiesToMaintain.includes(abilityName))
        await game.dsmacros.executeMacroFromCompendium(`UpdatePersistentCost`, { abilityName });
  }

  const roll = await new Roll(`${resourceAttribute.value} + ${resourceRoll}${persistentCost > 0 ? ` - ${persistentCost}` : ``}`).evaluate();
  await game.dsmacros.executeMacroFromCompendium(`ShareRoll`, {
    roll,
    flavor: resourceAttribute.label.capitalize()
  });

  await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `resource`, value: roll.total });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
