try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const resourceRoll = (await game.macros.getName(`ValidateParameter`).execute({ name: `resourceRoll`, value: scope.resourceRoll, type: `string`, nullable: true })) ?? `1d3`;

  const resourceAttribute = await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` });

  // If a persistent ability is active, determine if the persistent cost should be paid
  let persistentCost = 0;
  const activePersistentCost = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `persistentCost` })).value;
  if (activePersistentCost > 0) {
    const continuePersistent = await Dialog.confirm({
      title: `Persistent magic`,
      content: `<p>Continue persistent effect for ${activePersistentCost} ${resourceAttribute.label}?</p>`,
      rejectClose: true
    });

    if (continuePersistent)
      persistentCost = activePersistentCost;
    else
      await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `persistentCost`, value: 0 });
  }

  const roll = await new Roll(`${resourceAttribute.value} + ${resourceRoll}${persistentCost > 0 ? ` - ${persistentCost}` : ``}`).evaluate();
  await roll.toMessage({
    speaker: ChatMessage.implementation.getSpeaker({actor}),
    flavor: resourceAttribute.label.capitalize()
  });

  await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: roll.total });

  if (actor.sheet.rendered)
    actor.sheet.render(true);
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}