try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const victories = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `victories` })).value;

  const roll = await new Roll(`${victories}[victories]`).evaluate();
  await roll.toMessage({
    speaker: ChatMessage.implementation.getSpeaker({actor}),
    flavor: `Initial ${resource.label}`
  });

  const resource = await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: victories });

  if (actor.sheet.rendered)
    actor.sheet.render(true);
}
catch (error) {
  ui.notifications.error(error);
}