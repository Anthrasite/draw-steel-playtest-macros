//@id=zawCdUf340GQMJDK
//@name=Start combat
//@img=icons/skills/melee/hand-grip-sword-orange.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const victories = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `victories` })).value;

  const resource = await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `resource`, value: victories });

  const roll = await new Roll(`${victories}[victories]`).evaluate();
  await game.macros.getName(`ShareRoll`).execute({
    activeActor,
    roll,
    flavor: `Initial ${resource.label}`
  });
}
catch (error) {
  ui.notifications.error(error);
}
