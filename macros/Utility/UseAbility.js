//@id=UvSBFc1YuHe5kiDW
//@name=UseAbility
//@img=icons/svg/dice-target.svg
try {
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

  const getResourceCostFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getResourceCostFunc`, value: scope.getResourceCostFunc, type: `function`, nullable: true });
  const getExtraDamageFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getExtraDamageFunc`, value: scope.getExtraDamageFunc, type: `function`, nullable: true });
  const onUseFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `onUseFunc`, value: scope.onUseFunc, type: `function`, nullable: true });

  // Determine if the ability can actually be used
  const currResource = await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` });
  let actualResourceCost = getResourceCostFunc ? await getResourceCostFunc() : resourceCost;

  // Handle Shadow ability cost reduction
  const className = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `class` })).value;
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

  if (onUseFunc)
    await onUseFunc();

  // Perform the power roll, if the ability has a power roll
  let rollResult = undefined;
  if (powerRollStat) {
    rollResult = (await game.macros.getName(`DoPowerRoll`).execute({ powerRollStat, allowedEdgeBane }));

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
        for (const [charName, char] of Object.entries(actor.system.attributes.characteristics))
          if (charDamageOptions.indexOf(charName[0].toUpperCase()) >= 0 && (!maxCharName || char.value > charDamage)) {
            maxCharName = charName;
            charDamage = char.value;
          }
      }

      // Calculate the damage from the kit (if this isn't a kit ability)
      const isMelee = keywords.toLowerCase().includes("melee");
      const isRanged = keywords.toLowerCase().includes("ranged");
      const kitDamage = (!isMelee && !isRanged) || isKit ? 0 : await game.macros.getName(`GetKitDamage`).execute({ isMelee, tier: rollResult.tier });

      let extraDamage = undefined;
      if (getExtraDamageFunc)
        extraDamage = await getExtraDamageFunc();

      let damageRollString = ``;
      if (diceDamage)
        damageRollString += diceDamage + ` + `;
      damageRollString += constDamage;
      if (charDamage)
        damageRollString += ` + ` + charDamage + `[${maxCharName[0].toUpperCase()}]`;
      if (!isKit)
        damageRollString += ` + ` + kitDamage + `[kit]`;
      if (extraDamage)
        damageRollString += extraDamage;

      const damageRoll = await new Roll(damageRollString).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        roll: damageRoll,
        flavor: damageType ? `${damageType.capitalize()} damage` : `Damage`
      });
    }

    // Determine if any surges should be used
    const hasPotency = /([A-Z]\s+<\s+[A-Z0-9]+)/i.test(effect);
    const surgeCount = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `surges` })).value;
    if (doesDamage && surgeCount > 0 || hasPotency && surgeCount >= 2) {
      let surgeButtons = {
        z: { label: `0` }
      }
      if (doesDamage)
        surgeButtons.d1 = { label: `1 (damage)` };
      if (surgeCount >= 2) {
        if (doesDamage)
          surgeButtons.d2 = { label: `2 (damage)` };
        if (hasPotency)
          surgeButtons.p2 = { label: `2 (potency)` };
      }
      if (surgeCount >= 3)
        surgeButtons.d3 = { label: `3 (damage)` };

      const surgeButtonStyles = `
        <style>
          .dialog-buttons {
            white-space: nowrap;
          }
          button.d1, button.d2, button.d3 {
            color: darkred;
          }
          button.p2 {
            color: darkblue;
          }
        </style>`;

      const surgesUsed = await Dialog.wait({
        title: `Surges to use`,
        buttons: surgeButtons,
        content: surgeButtonStyles,
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
            await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: 1, isDelta: true });
        }

        if (damageSurges > 0) {
          const characteristics = actor.system.attributes.characteristics;
          const maxChar = Math.max(...(Object.keys(characteristics).map((key) => characteristics[key].value)));
          const surgeDamage = (damageSurges * maxChar);
          const surgeRoll = await new Roll(surgeDamage.toString()).evaluate();
          await game.macros.getName(`ShareRoll`).execute({
            roll: surgeRoll,
            flavor: `Extra surge damage`
          });
        }

        await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `surges`, value: -(damageSurges + potencySurges), isDelta: true });
      }
    }
  }

  // Set the persistent cost, if the ability has a persistent cost
  if (persistentCost) {
    await game.macros.getName(`UpdatePersistentCost`).execute({ abilityName: name, cost: persistentCost });
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
      await game.macros.getName(`UpdateAttribute`).execute({ attributeName: `resource`, value: -totalResourceCost, isDelta: true });
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
