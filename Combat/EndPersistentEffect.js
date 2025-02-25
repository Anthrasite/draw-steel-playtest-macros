try {
  await game.macros.getName("ValidateActorAttributes").execute();

  await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `persistentCost`, value: 0 });
}
catch (error) {
  ui.notifications.error(error);
}