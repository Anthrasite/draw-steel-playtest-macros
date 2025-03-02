//@id=zawCdUf340GQMJDK
//@name=Start combat
//@img=icons/skills/melee/hand-grip-sword-orange.webp
try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const victories = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `victories` })).value;

  const resource = await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: victories });

  const roll = await new Roll(`${victories}[victories]`).evaluate();
  await game.macros.getName(`ShareRoll`).execute({
    roll,
    flavor: `Initial ${resource.label}`
  });
}
catch (error) {
  ui.notifications.error(error);
}
