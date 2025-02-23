// TODO: Force token to update when updating health or power

try {
  if (!actor)
    ui.notifications.error(`No token is selected`);
  else {
    const health = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `health` }));

    if (health.value >= health.max)
      ui.notifications.info(`Health is already full!`);
    else {
      const recoveries = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `recoveries` }));

      if (recoveries.value <= 0)
        ui.notifications.info(`No recoveries left!`);
      else {
        const recoveryValue = Math.floor(health.max / 3);
        const newHealth = Math.min(health.value + recoveryValue, health.max);
        await game.macros.getName(`UpdateAttribute`).execute({
          attributeName: `health`,
          value: newHealth
        })
        await game.macros.getName(`UpdateAttribute`).execute({
          attributeName: `recoveries`,
          value: -1,
          add: true
        })
      }
    }

    if (actor.sheet.rendered)
      actor.sheet.render(true);
  }
}
catch (error) {
  ui.notifications.error(error);
  throw error;
}