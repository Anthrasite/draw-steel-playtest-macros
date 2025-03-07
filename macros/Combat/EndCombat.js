//@id=VuzLJPa7S52xeU9X
//@name=End combat
//@img=icons/skills/melee/blade-tip-chipped-blood-red.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const gainedVictories = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Victories`, label: `Victories earned`, defaultValue: 1, allowNegative: false }));
  if (gainedVictories > 0)
    await game.macros.getName("UpdateAttribute").execute({ activeActor, attributeName: "victories", value: gainedVictories, isDelta: true });

  await game.macros.getName("UpdateAttribute").execute({ activeActor, attributeName: "surges", value: 0 });
  await game.macros.getName("UpdateAttribute").execute({ activeActor, attributeName: "resource", value: 0 });
  await game.macros.getName("UpdatePersistentCost").execute({ activeActor });
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
