//@id=C9Rq36QntKBJ78Uf
//@name=Gain resource
//@img=icons/magic/symbols/ring-circle-smoke-blue.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const resource = await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `resource` });
  const resourceLabel = resource.label.capitalize();
  const resourceGain = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: resourceLabel, label: `${resourceLabel} gained`, defaultValue: 1, allowNegative: false }));

  if (resourceGain > 0)
    await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `resource`, value: resourceGain, isDelta: true });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
