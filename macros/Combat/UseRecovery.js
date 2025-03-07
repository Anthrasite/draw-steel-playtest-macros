//@id=fHT9Y1QkwMhazr7D
//@name=Use recovery
//@img=icons/magic/life/cross-worn-green.webp
try {
  const activeActor = actor;
  await game.macros.getName("ValidateActorAttributes").execute({ activeActor });

  const stamina = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `stamina` }));

  if (stamina.value >= stamina.max)
    ui.notifications.info(`Stamina is already full!`);
  else {
    const recoveries = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `recoveries` }));

    if (recoveries.value <= 0)
      ui.notifications.info(`No recoveries left!`);
    else {
      const recoveryValue = Math.floor(stamina.max / 3);
      const newStamina = Math.min(stamina.value + recoveryValue, stamina.max);

      if (newStamina < stamina.value + recoveryValue) {
        const useRecovery = await Dialog.confirm({
          title: `Use recovery?`,
          content: `<p>Warning: If you use a Recovery, ${stamina.value + recoveryValue - newStamina} Stamina will be wasted. Do you still want to use a Recovery?</p>`,
          defaultYes: false
        });
        if (!useRecovery)
          return;
      }

      await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `stamina`, value: newStamina });
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `recoveries`, value: -1, isDelta: true });
    }
  }
}
catch (error) {
  ui.notifications.error(error);
}
