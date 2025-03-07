//@id=zawCdUf340GQMJDK
//@name=Start combat
//@img=icons/skills/melee/hand-grip-sword-orange.webp
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const victories = (await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `victories` })).value;

  const resource = await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `resource`, value: victories });

  const roll = await new Roll(`${victories}[victories]`).evaluate();
  await game.dsmacros.executeMacroFromCompendium(`ShareRoll`, {
    roll,
    flavor: `Initial ${resource.label}`
  });
}
catch (error) {
  ui.notifications.error(error);
}
