try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const name = await game.macros.getName(`ValidateParameter`).execute({ name: `name`, value: scope.name, type: `string` });
  const resourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `resourceCost`, value: scope.resourceCost, type: `number`, nullable: true });
  const flavorText = await game.macros.getName(`ValidateParameter`).execute({ name: `flavorText`, value: scope.flavorText, type: `string`, nullable: true });
  const type = await game.macros.getName(`ValidateParameter`).execute({ name: `type`, value: scope.type, type: `string` });
  const keywords = await game.macros.getName(`ValidateParameter`).execute({ name: `keywords`, value: scope.keywords, type: `string` });
  const isKit = await game.macros.getName(`ValidateParameter`).execute({ name: `isKit`, value: scope.isKit, type: `boolean`, nullable: true });
  const distance = await game.macros.getName(`ValidateParameter`).execute({ name: `distance`, value: scope.distance, type: `string` });
  const target = await game.macros.getName(`ValidateParameter`).execute({ name: `target`, value: scope.target, type: `string` });
  const trigger = await game.macros.getName(`ValidateParameter`).execute({ name: `trigger`, value: scope.trigger, type: `string`, nullable: true });
  const powerRollStat = await game.macros.getName(`ValidateParameter`).execute({ name: `powerRollStat`, value: scope.powerRollStat, type: `string`, nullable: true });
  const tier1Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier1Effect`, value: scope.tier1Effect, type: `string`, nullable: true });
  const tier2Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier2Effect`, value: scope.tier2Effect, type: `string`, nullable: true });
  const tier3Effect = await game.macros.getName(`ValidateParameter`).execute({ name: `tier3Effect`, value: scope.tier3Effect, type: `string`, nullable: true });
  const effect = await game.macros.getName(`ValidateParameter`).execute({ name: `effect`, value: scope.effect, type: `string`, nullable: true });
  const extraResourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `extraResourceCost`, value: scope.extraResourceCost, type: `string`, nullable: true });
  const extraResourceEffect = await game.macros.getName(`ValidateParameter`).execute({ name: `extraResourceEffect`, value: scope.extraResourceEffect, type: `string`, nullable: true });
  const persistentCost = await game.macros.getName(`ValidateParameter`).execute({ name: `persistentCost`, value: scope.persistentCost, type: `number`, nullable: true });
  const persistentEffect = await game.macros.getName(`ValidateParameter`).execute({ name: `persistentEffect`, value: scope.persistentEffect, type: `string`, nullable: true });

  const getResourceCostFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getResourceCostFunc`, value: scope.getResourceCostFunc, type: `function`, nullable: true });
  const getAllowedEdgeBaneFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getAllowedEdgeBaneFunc`, value: scope.getAllowedEdgeBaneFunc, type: `function`, nullable: true });
  const getExtraDamageFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `getExtraDamageFunc`, value: scope.getExtraDamageFunc, type: `function`, nullable: true });
  const onUseFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `onUseFunc`, value: scope.onUseFunc, type: `function`, nullable: true });
  const onSurgeFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `onSurgeFunc`, value: scope.onSurgeFunc, type: `function`, nullable: true });

  // Perform additional validation
  if (name.includes(`:`) || name.includes(`;`))
    throw `Error: name cannot include ":" or ";"`;
  if (typeof(resourceCost) !== `undefined` && resourceCost === 0)
    throw `Error: resourceCost cannot be 0`;
  if (typeof(powerRollStat) !== typeof(tier1Effect) || typeof(powerRollStat) !== typeof(tier2Effect) || typeof(powerRollStat) !== typeof(tier3Effect))
    throw `Error: powerRollStat, tier1Effect, tier2Effect, and tier3Effect must be specified together`;
  if (typeof(extraResourceCost) !== typeof(extraResourceEffect))
    throw `Error: extraResourceCost and extraResourceEffect must be specified together`;
  if (typeof(extraResourceCost) !== `undefined` && !/[1-9][0-9]*\+?/.test(extraResourceCost))
    throw `Error: extraResourceCost cannot be 0`;
  if ((typeof(persistentCost) !== `undefined` || typeof(persistentEffect) !== `undefined`) && (typeof(persistentCost) !== `number` || typeof(persistentEffect) !== `string`))
    throw `Error: persistentCost and persistentEffect must be specified together`;
  if (typeof(persistentCost) !== `undefined` && persistentCost === 0)
    throw `Error: persistentCost cannot be 0`;

  if (typeof(resourceCost) === `undefined` && typeof(getResourceCostFunc) !== `undefined`)
    throw `Error: getResourceCostFunc cannot be specified if resourceCost is not specified`;
  if (typeof(powerRollStat) === `undefined` && typeof(getAllowedEdgeBaneFunc) !== `undefined`)
    throw `Error: getAllowedEdgeBaneFunc cannot be specified if powerRollStat is not specified`;
  if (typeof(powerRollStat) === `undefined` && typeof(onSurgeFunc) !== `undefined`)
    throw `Error: onSurgeFunc cannot be specified if powerRollStat is not specified`;

  // Calculate values for showing the "Use" button
  const buttonId = await game.macros.getName(`GetUUID`).execute();

  const resource = await game.macros.getName(`GetAttribute`).execute({ attributeName: `resource` });

  const showUseButton = resourceCost || extraResourceCost || powerRollStat || onUseFunc;
  const canUse = showUseButton && (typeof(resourceCost) === `undefined` || resource.value >= resourceCost);

  // Calculate the colour for the ability type
  const actionColor = type === `Action` ? `rgb(166, 28, 0)`
    : type === `Maneuver` ? `rgb(61, 133, 198)`
    : type === `Triggered` ? `rgb(56, 118, 29)`
    : type === `Free Triggered` ? `rgb(191, 144, 0)`
    : `black`;

  // Define function for highlighting any potencies in power roll results
  function highlightPotencyFunc(tierEffect) {
    return tierEffect.replaceAll(/([A-Z]\s+<\s+[A-Z0-9]+)/gi, `<span style="color: red">$1</span>`);
  }

  // Show the ability in the chat
  await ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker(),
    flags: { "core.canPopout": true },
    content: 
      `<h2 style="border-color: ${actionColor}; border-width: 2px;">${name}${(resourceCost ? ` <span style="font-size: 80%; font-style: italic;"> (${resourceCost} ${resource.label})</span>` : ``)}</h2>
      ${(flavorText? `<p style="font-style: italic;">${flavorText}</p>` : ``)}
      <table style="border: 0px; table-layout: fixed;">
        <tr>
          <td><b>Keywords:</b> ${keywords}</td>
        </tr>
        <tr>
          <td><b>Type:</b> ${type}</td>
        </tr>
        <tr>
          <td><b>Distance:</b> ${distance}</td>
        </tr>
        <tr>
          <td><b>Target:</b> ${target}</td>
        </tr>
      </table>
      ${(trigger ? `<p><b>Trigger:</b> ${trigger}</p>` : ``)}
      ${(powerRollStat ? `
        <p style="font-weight: bold;">Power Roll + ${powerRollStat}:</p>
        <ul>
          <li><b>&lt;11:</b> ${highlightPotencyFunc(tier1Effect)}</li>
          <li><b>12-16:</b> ${highlightPotencyFunc(tier2Effect)}</li>
          <li><b>17+:</b> ${highlightPotencyFunc(tier3Effect)}</li>
        </ul>
      ` : ``)}
      ${(effect ? `<p><b>Effect:</b> ${effect}${effect.includes(`</p>`) ? `` : `</p>`}` : ``)}
      ${(persistentCost ? `<p><b>Persistent ${persistentCost}:</b> ${persistentEffect}${persistentEffect.includes(`</p>`) ? `` : `</p>`}` : ``)}
      ${(extraResourceCost ? `<p><b>Spend ${extraResourceCost} ${resource.label}:</b> ${extraResourceEffect}${extraResourceEffect.includes(`</p>`) ? `` : `</p>`}` : ``)}
      ${(showUseButton ? `<button id="${buttonId}">${(canUse ? `Use` : `Not enough ${resource.label}`)}</button>` : ``)}`
  });

  // Register event for the "Use" button
  if (showUseButton) {
    $(document).on(`click`, `#${buttonId}`, async function() {
      const button = $(this);
      await game.macros.getName(`UseAbility`).execute({
        button,
        name,
        keywords,
        isKit,
        resourceCost,
        extraResourceCost,
        persistentCost,
        powerRollStat,
        tier1Effect,
        tier2Effect,
        tier3Effect,
        getResourceCostFunc,
        getAllowedEdgeBaneFunc,
        getExtraDamageFunc,
        onUseFunc,
        onSurgeFunc
      });
    });
  }
}
catch (error) {
  ui.notifications.error(error);
}