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

      if (newHealth < health.value + recoveryValue) {
        const useRecovery = await Dialog.confirm({
          title: `Use recovery?`,
          content: `<p>Warning: If you use a recovery, ${health.value + recoveryValue - newHealth} health will be wasted. Do you still want to use a recovery?</p>`,
          defaultYes: false
        });
        if (!useRecovery)
          return;
      }

      await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `health`, value: newHealth });
      await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `recoveries`, value: -1, isDelta: true });
    }
  }
}
catch (error) {
  ui.notifications.error(error);
}

