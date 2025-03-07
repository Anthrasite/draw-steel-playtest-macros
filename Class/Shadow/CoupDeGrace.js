let resourceCost = 5;

await game.macros.getName("ShareAbility").execute({
  name: "Coup de Grace",
  flavorText: "Your blade might be the last thing they see.",
  resourceCost: resourceCost,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "1d6 + 7 + A damage",
  tier2Effect: "1d6 + 11 + A damage",
  tier3Effect: "1d6 + 16 + A damage",
  canUseFunc: async function() {
    const currResource = await game.macros.getName(`GetAttribute`).execute({
      attributeName: `resource`
    });

    let canUse = currResource.value >= resourceCost;
    if (!canUse && currResource.value + 1 >= resourceCost)
      canUse = await Dialog.confirm({
        title: `Edge?`,
        content: `<p>Will you have an edge on the power roll (against at least one target)?</p>`
      });

    if (!canUse)
      ui.notifications.info(`Not enough ${currResource.label}!`);

    return canUse;
  }
});

// TODO: Still need to actually reduce the cost when I have an edge
// TODO: Should probably move all this to separate macros so I can reuse them