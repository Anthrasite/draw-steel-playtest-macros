try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const resource = await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` });
  const resourceLabel = resource.label.capitalize();
  const resourceGain = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: resourceLabel, label: `${resourceLabel} gained`, defaultValue: 1, allowNegative: false }));

  if (resourceGain > 0) {
    const roll = await new Roll(`${resource.value} + ${resourceGain}`).evaluate();
    await game.macros.getName(`SendRollToChat`).execute({
      roll,
      flavor: resourceLabel
    });

    await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: resourceGain, isDelta: true });
  }
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}