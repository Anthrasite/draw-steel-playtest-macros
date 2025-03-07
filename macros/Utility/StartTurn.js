//@id=SQXPenBmpa0GCwc3
//@name=StartTurn
//@img=icons/svg/dice-target.svg
try {
  const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const resourceRoll = (await game.macros.getName(`ValidateParameter`).execute({ name: `resourceRoll`, value: scope.resourceRoll, type: `string`, nullable: true })) ?? `1d3`;

  const resourceAttribute = await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `resource` });

  // If any persistent abilities are active, show a selector for those that should be maintained, and calculate the cost
  let persistentCost = 0;
  const currPersistentCosts = await game.macros.getName(`GetPersistentCost`).execute({ activeActor });
  if (Object.keys(currPersistentCosts).length) {
    if (resourceRoll.includes("d"))
      throw `Error: Handling of persistent effects with variable resource gain is not implemented`;

    const abilitiesToMaintain = await game.macros.getName("ShowPersistentCostDialog").execute({ activeActor, label: `Persistent effects to maintain`, resourceLabel: resourceAttribute.label, selectByDefault: true });
    for (const abilityName of abilitiesToMaintain)
      persistentCost += currPersistentCosts[abilityName];

    if (resourceRoll - persistentCost < 0) {
      ui.notifications.error(`Not enough ${resourceAttribute.label} to maintain all persistent effects!`);
      return;
    }

    for (const [abilityName, cost] of Object.entries(currPersistentCosts))
      if (!abilitiesToMaintain.includes(abilityName))
        await game.macros.getName(`UpdatePersistentCost`).execute({ activeActor, abilityName });
  }

  const roll = await new Roll(`${resourceAttribute.value} + ${resourceRoll}${persistentCost > 0 ? ` - ${persistentCost}` : ``}`).evaluate();
  await game.macros.getName(`ShareRoll`).execute({
    activeActor,
    roll,
    flavor: resourceAttribute.label.capitalize()
  });

  await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `resource`, value: roll.total });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
