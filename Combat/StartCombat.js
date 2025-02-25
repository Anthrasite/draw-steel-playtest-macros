try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const victories = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `victories` })).value;

  const resource = await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: victories });

  const roll = await new Roll(`${victories}[victories]`).evaluate();
  await roll.toMessage({
    speaker: ChatMessage.implementation.getSpeaker({actor}),
    flavor: `Initial ${resource.label}`
  });
}
catch (error) {
  ui.notifications.error(error);
}