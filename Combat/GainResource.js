try {
  const resource = await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` });
  const resourceLabel = resource.label.capitalize();
  const resourceGain = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: resourceLabel, label: `${resourceLabel} gained`, defaultValue: 1, allowNegative: false }));

  if (resourceGain > 0) {
    await game.macros.getName(`UpdateAttribute`).execute({
      attributeName: `resource`,
      value: resourceGain,
      add: true
    });

    const roll = await new Roll(`${resource.value} + ${resourceGain}`).evaluate();
    await roll.toMessage({
      speaker: ChatMessage.implementation.getSpeaker({actor}),
      flavor: resourceLabel
    });
  }

  if (actor.sheet.rendered)
    actor.sheet.render(true);
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}