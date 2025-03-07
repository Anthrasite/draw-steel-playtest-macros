//@id=VuzLJPa7S52xeU9X
//@name=End combat
//@img=icons/skills/melee/blade-tip-chipped-blood-red.webp
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const gainedVictories = Number(await game.dsmacros.executeMacroFromCompendium(`ShowSimpleInputDialog`, { title: `Victories`, label: `Victories earned`, defaultValue: 1, allowNegative: false }));
  if (gainedVictories > 0)
    await game.dsmacros.executeMacroFromCompendium("UpdateAttribute", { attributeName: "victories", value: gainedVictories, isDelta: true });

  await game.dsmacros.executeMacroFromCompendium("UpdateAttribute", { attributeName: "surges", value: 0 });
  await game.dsmacros.executeMacroFromCompendium("UpdateAttribute", { attributeName: "resource", value: 0 });
  await game.dsmacros.executeMacroFromCompendium("UpdatePersistentCost", );
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
