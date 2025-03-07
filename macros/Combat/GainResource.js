//@id=C9Rq36QntKBJ78Uf
//@name=Gain resource
//@img=icons/magic/symbols/ring-circle-smoke-blue.webp
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const resource = await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `resource` });
  const resourceLabel = resource.label.capitalize();
  const resourceGain = Number(await game.dsmacros.executeMacroFromCompendium(`ShowSimpleInputDialog`, { title: resourceLabel, label: `${resourceLabel} gained`, defaultValue: 1, allowNegative: false }));

  if (resourceGain > 0) {
    const roll = await new Roll(`${resource.value} + ${resourceGain}`).evaluate();
    await game.dsmacros.executeMacroFromCompendium(`ShareRoll`, {
      roll,
      flavor: resourceLabel
    });

    await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `resource`, value: resourceGain, isDelta: true });
  }
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
