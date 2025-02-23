try {
  const resourceRoll = (await game.macros.getName(`ValidateParameter`).execute({ name: `resourceRoll`, value: scope.resourceRoll, type: `string`, nullable: true })) ?? `1d3`;

  if (!actor)
    ui.notifications.error(`No token is selected`);
  else {
    let resourceAttribute = await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` });

    const roll = await new Roll(`${resourceAttribute.value} + ${resourceRoll}`).evaluate();
    await roll.toMessage({
      speaker: ChatMessage.implementation.getSpeaker({actor}),
      flavor: resourceAttribute.label.capitalize()
    });

    await game.macros.getName(`UpdateAttribute`).execute({
      attributeName: `resource`,
      value: roll.total
    });

    if (actor.sheet.rendered)
      actor.sheet.render(true);
  }
}
catch (error) {
  ui.notifications.error(error);
  throw error;
}