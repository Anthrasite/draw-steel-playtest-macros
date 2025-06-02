//@id=UvSBFc1YuHe5kiDW
//@name=UseAbility
//@img=icons/svg/dice-target.svg
try {
  const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });
  const button = await game.macros.getName(`ValidateParameter`).execute({ name: `button`, value: scope.button, type: `object` });

  const name = await game.macros.getName(`ValidateParameter`).execute({ name: `name`, value: scope.name, type: `string` });
  const resourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `resourceCost`, value: scope.resourceCost, type: `number`, nullable: true });
  const extraResourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `extraResourceCost`, value: scope.extraResourceCost, type: `string`, nullable: true });
  const persistentCost = await game.macros.getName(`ValidateParameter`).execute({ name: `persistentCost`, value: scope.persistentCost, type: `number`, nullable: true });
  const powerRollStat = await game.macros.getName(`ValidateParameter`).execute({ name: `powerRollStat`, value: scope.powerRollStat, type: `string`, nullable: true });
  const tier1Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier1Effect`, value: scope.tier1Effect, type: `string`, nullable: true });
  const tier2Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier2Effect`, value: scope.tier2Effect, type: `string`, nullable: true });
  const tier3Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier3Effect`, value: scope.tier3Effect, type: `string`, nullable: true });
  const keywords = (await game.macros.getName(`ValidateParameter`).execute({ name: `keywords`, value: scope.keywords, type: `string`, nullable: true })) ?? ``;
  const isKit = (await game.macros.getName(`ValidateParameter`).execute({ name: `isKit`, value: scope.isKit, type: `boolean`, nullable: true })) ?? false;

  const getExtraDamageFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getExtraDamageFunc`, value: scope.getExtraDamageFunc, type: `function`, nullable: true });
  const beforeRollFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `beforeRollFunc`, value: scope.beforeRollFunc, type: `function`, nullable: true });
  const afterRollFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `afterRollFunc`, value: scope.afterRollFunc, type: `function`, nullable: true });

  // Determine if the ability can actually be used
  const currResource = await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `resource` });
  let actualResourceCost = resourceCost;

  // Handle free persistent effect
  const persistentCosts = await game.macros.getName(`GetPersistentCost`).execute({ activeActor });
  if (Object.keys(persistentCosts).length && Object.hasOwn(persistentCosts, name)) {
    const isPersistent = await Dialog.confirm({
      title: `Persistent effect?`,
      content: `<p>Are you using the persistent effect of ${name}?</p>`,
      defaultYes: false
    });
    actualResourceCost = isPersistent ? 0 : resourceCost;
  }

  // Handle Shadow ability cost reduction
  const className = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `class` })).value;
  let allowedEdgeBane = undefined;
  if (className.toLowerCase() === "shadow" && actualResourceCost && powerRollStat) {
    const decreaseCost = await Dialog.confirm({
      title: `Edge?`,
      content: `<p>Will you have an edge on the power roll (against at least one target)?</p>`,
      rejectClose: true
    });

    if (decreaseCost) {
      --actualResourceCost;
      allowedEdgeBane = ['de', 'e'];
    }
    else
      allowedEdgeBane = ['n', 'b', 'db'];
  }

  if (actualResourceCost && currResource.value < actualResourceCost) {
    ui.notifications.info(`Not enough ${currResource.label}!`);
    return;
  }

  if (beforeRollFunc)
    await beforeRollFunc();

  // Perform the power roll, if the ability has a power roll
  let rollResult = undefined;
  if (powerRollStat) {
    rollResult = (await game.macros.getName(`DoPowerRoll`).execute({ activeActor, powerRollStat, allowedEdgeBane }));

    // Calculate the damage of the ability
    const effect = [ tier1Effect, tier2Effect, tier3Effect ][rollResult.tier - 1];
    const matches = effect.match(/^(([0-9]+d[0-9]+)\s+\+\s+)?([0-9]+)(\s+\+\s+[MAIRPor,\s]+)?\s+((acid|cold|corruption|fire|holy|lightning|poison|psychic|sonic)\s+)?damage/);
    const doesDamage = matches !== null;
    if (doesDamage) {
      const diceDamage = matches[2];
      const constDamage = matches[3];
      const charDamageOptions = matches[4];
      const damageType = matches[6];

      // Calculate the damage from the highest characteristic
      let charDamage = undefined;
      let maxCharName = undefined;
      if (charDamageOptions) {
        for (const [charName, char] of Object.entries(activeActor.system.attributes.characteristics))
          if (charDamageOptions.indexOf(charName[0].toUpperCase()) >= 0 && (!maxCharName || char.value > charDamage)) {
            maxCharName = charName;
            charDamage = char.value;
          }
      }

      // Calculate the damage from any weapon/implement enhancements
      function canAddWeaponEnhancementDamage() {
        return keywords.toLowerCase().includes(`weapon`);
      }
      function canAddImplementEnhancementDamage() {
        return keywords.toLowerCase().includes(`magic`) || keywords.toLowerCase().includes(`psionic`);
      }
      async function getEnhancementDamage(isWeapon) {
        return (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: isWeapon ? `weaponEnhancement` : `implementEnhancement` }))?.value ?? 0
      }
      const weaponEnhancementDamage = canAddWeaponEnhancementDamage() ? await getEnhancementDamage(true) : 0;
      const implementEnhancementDamage = canAddImplementEnhancementDamage() ? await getEnhancementDamage(false) : 0;
      const enhancementDamage = Math.max(weaponEnhancementDamage, implementEnhancementDamage);

      // Calculate the damage from the kit (if this isn't a kit ability)
      function canAddKitDamage(isMelee) {
        return !isKit && keywords.toLowerCase().includes(isMelee ? "melee" : "ranged") && keywords.toLowerCase().includes("weapon");
      }
      async function getKitDamage(isMelee) {
        return await game.macros.getName(`GetKitDamage`).execute({ activeActor, isMelee, tier: rollResult.tier });
      }
      const meleeKitDamage = canAddKitDamage(true) ? await getKitDamage(true) : 0;
      const rangedKitDamage = canAddKitDamage(false) ? await getKitDamage(false) : 0;
      const kitDamage = Math.max(meleeKitDamage, rangedKitDamage);

      let extraDamage = undefined;
      if (getExtraDamageFunc)
        extraDamage = await getExtraDamageFunc(rollResult);

      let damageRollString = ``;
      if (diceDamage)
        damageRollString += diceDamage + ` + `;
      damageRollString += constDamage;
      if (charDamage)
        damageRollString += ` + ` + charDamage + `[${maxCharName[0].toUpperCase()}]`;
      if (enhancementDamage)
        damageRollString += ` + ` + enhancementDamage + `[enh]`;
      if (kitDamage)
        damageRollString += ` + ` + kitDamage + `[kit]`;
      if (extraDamage)
        damageRollString += extraDamage;

      const damageRoll = await new Roll(damageRollString).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor,
        roll: damageRoll,
        flavor: damageType ? `${damageType.capitalize()} damage` : `Damage`
      });
    }

    // Determine if any surges should be used
    const hasPotency = /([A-Z]\s+<\s+[A-Z0-9]+)/i.test(effect);
    const surgeCount = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `surges` })).value;
    if (doesDamage && surgeCount > 0 || hasPotency && surgeCount >= 2) {
      let surgeButtons = {
        z: { label: `0` },
        d1: { label: `1 (damage)`, color: `darkred`, disabled: true },
        d2: { label: `2 (damage)`, color: `darkred`, disabled: true },
        p2: { label: `2 (potency)`, color: `darkblue`, disabled: true },
        d3: { label: `3 (damage)`, color: `darkred`, disabled: true }
      }
      if (doesDamage)
        surgeButtons.d1.disabled = false;
      if (surgeCount >= 2) {
        if (doesDamage)
          surgeButtons.d2.disabled = false;
        if (hasPotency)
          surgeButtons.p2.disabled = false;
      }
      if (surgeCount >= 3)
        surgeButtons.d3.disabled = false;

      function getSurgeButtonColor(button) {
        return button.disabled ? `var(--color-text-dark-secondary)` : button.color;
      }

      const surgeButtonStyles = `
        <style>
          .dialog-buttons {
            white-space: nowrap;
          }
          button.d1 {
            color: ${getSurgeButtonColor(surgeButtons.d1)};
          }
          button.d2 {
            color: ${getSurgeButtonColor(surgeButtons.d2)};
          }
          button.d3 {
            color: ${getSurgeButtonColor(surgeButtons.d3)};
          }
          button.p2 {
            color: ${getSurgeButtonColor(surgeButtons.p2)};
          }
        </style>`;

      const surgesUsed = await Dialog.wait({
        title: `Surges to use`,
        buttons: surgeButtons,
        content: surgeButtonStyles,
        default: `z`,
        close: () => { return 0; }
      });

      // If surges should be used, subtract the surges, and send an additional roll for surge damage if used for damage
      if (surgesUsed && surgesUsed !== `z`) {
        const damageSurges = surgesUsed.startsWith(`d`) ? Number(surgesUsed.substring(1)) : 0;
        const potencySurges = surgesUsed.startsWith(`p`) ? Number(surgesUsed.substring(1)) : 0;

        // Handle Shadow resource gain when using a surges for damage for the first time in a round
        if (className.toLowerCase() === "shadow" && damageSurges > 0) {
          const firstSurge = await Dialog.confirm({
            title: `First surge?`,
            content: `<p>Is this the first surge used this round?</p>`,
            defaultYes: false
          });
          if (firstSurge)
            await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `resource`, value: 1, isDelta: true });
        }

        if (damageSurges > 0) {
          const characteristics = activeActor.system.attributes.characteristics;
          const maxChar = Math.max(...(Object.keys(characteristics).map((key) => characteristics[key].value)));
          const surgeDamage = (damageSurges * maxChar);
          const surgeRoll = await new Roll(surgeDamage.toString()).evaluate();
          await game.macros.getName(`ShareRoll`).execute({
            activeActor,
            roll: surgeRoll,
            flavor: `Extra damage`
          });
        }

        await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `surges`, value: -(damageSurges + potencySurges), isDelta: true });
      }
    }
  }

  if (afterRollFunc)
    await afterRollFunc();

  // Set the persistent cost, if the ability has a persistent cost
  if (persistentCost) {
    await game.macros.getName(`UpdatePersistentCost`).execute({ activeActor, abilityName: name, cost: persistentCost });
  }

  // Subtract the resource cost, if the ability has a resource cost
  if (actualResourceCost || extraResourceCost) {
    let totalResourceCost = actualResourceCost ?? 0;

    // Determine if extra resource should be used and use it if so
    if (extraResourceCost) {
      let extraResourceUsed = 0;

      const isExtraResourceCostVariable = extraResourceCost.endsWith(`+`);
      const minExtraResourceCost = Number(isExtraResourceCostVariable ? extraResourceCost.substring(0, extraResourceCost.length - 1) : extraResourceCost);

      // If the extra resource ends with a "+", then a variable amount can be used
      if (isExtraResourceCostVariable) {
        if (currResource.value >= totalResourceCost + minExtraResourceCost) {
          extraResourceUsed = Number((await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Extra ${currResource.label}`, label: `Extra ${currResource.label} to use`, defaultValue: minExtraResourceCost, allowNegative: false, rejectClose: false })) ?? 0);

          // Ensure the minimum resource was used
          if (extraResourceUsed > 0 && extraResourceUsed < minExtraResourceCost) {
            extraResourceUsed = 0;
            ui.notifications.warn(`Extra effect requires at least ${minExtraResourceCost} ${currResource.label} to be used! No extra ${currResource.label} was used.`);
          }
          // Ensure that the actor has enough resource
          else if (currResource.value < totalResourceCost + extraResourceUsed) {
            extraResourceUsed = currResource.value - totalResourceCost;
            ui.notifications.warn(`Not enough ${currResource.label}! ${extraResourceUsed} ${currResource.label} will be used instead.`);
          }
        }
      }
      // If the extra resource doesn't end with a "+", then exactly that amount must be used
      else if (currResource.value >= totalResourceCost + minExtraResourceCost)
        extraResourceUsed = await Dialog.confirm({
          title: `Extra ${currResource.label}`,
          content: `<p>Use extra ${minExtraResourceCost} ${currResource.label}?</p>`,
          defaultYes: false
        }) ? minExtraResourceCost : 0;

      totalResourceCost += extraResourceUsed;
    }

    if (totalResourceCost > 0) {
      await game.macros.getName(`UpdateAttribute`).execute({ activeActor, attributeName: `resource`, value: -totalResourceCost, isDelta: true });
    }
  }

  // Disable this event and delete the button
  button.off(`click`);
  button.remove();
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
}
