//@id=8Z6Yp7HR0DsGrXWI
//@name=UseRecovery
//@img=icons/svg/dice-target.svg
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const health = (await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `health` }));

  if (health.value >= health.max)
    ui.notifications.info(`Health is already full!`);
  else {
    const recoveries = (await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `recoveries` }));

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

      await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `health`, value: newHealth });
      await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `recoveries`, value: -1, isDelta: true });
    }
  }
}
catch (error) {
  ui.notifications.error(error);
}
