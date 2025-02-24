try {
  if (!actor)
    ui.notifications.error(`No token is selected`);
  else {
    await game.macros.getName(`UpdateAttribute`).execute({
      attributeName: `persistentCost`,
      value: 0
    });

    if (actor.sheet.rendered)
      actor.sheet.render(true);
  }
}
catch (error) {
  ui.notifications.error(error);
}