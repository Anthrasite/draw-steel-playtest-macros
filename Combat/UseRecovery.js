try {
  await game.macros.getName("ValidateActorAttributes").execute();

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
      await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `health`, value: newHealth });
      await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `recoveries`, value: -1, isDelta: true });

      // The sheet must be rendered and submitted in order to update the bars on the token
      const rendered = actor.sheet.rendered.valueOf();

      async function submitAndCloseSheet(sheet, html, data) {
        if (actor.sheet.id !== sheet.id)
          return;

        Hooks.off(`renderSimpleActorSheet`, submitAndCloseSheet);
        await actor.sheet.submit();
        if (!rendered)
          await actor.sheet.close();
      }

      Hooks.on(`renderSimpleActorSheet`, submitAndCloseSheet);
      actor.sheet.render(true);
    }
  }
}
catch (error) {
  ui.notifications.error(error);
}

