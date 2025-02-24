try {
  if (!actor)
    ui.notifications.error(`No token is selected`);
  else {
    let victories = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `victories` })).value;

    await game.macros.getName(`UpdateAttribute`).execute({
      attributeName: `resource`,
      value: victories
    });

    let resourceLabel = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` })).label;

    const roll = await new Roll(`${victories}[victories]`).evaluate();
    await roll.toMessage({
      speaker: ChatMessage.implementation.getSpeaker({actor}),
      flavor: `Initial ${resourceLabel}`
    });

    if (actor.sheet.rendered)
      actor.sheet.render(true);
  }
}
catch (error) {
  ui.notifications.error(error);
}