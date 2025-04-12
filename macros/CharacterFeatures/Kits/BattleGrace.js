//@id=tyEmUSCrOxnPpXaj
//@name=Battle Grace
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Battle Grace",
  flavorText: "You feint to move your enemies into perfect position.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "5 + M or A damage",
  tier2Effect: "8 + M or A damage; you swap places with the target",
  tier3Effect: "11 + M or A damage; you swap places with the target",
  effect: "If you roll a 12 or better and can’t swap places with the target because one or both of you is too big to fit into the swapped space, you both remain in your original spaces and the target takes 1 extra damage.",
  getExtraDamageFunc: async function(rollResult) {
    const doFailedSwapDamage = rollResult.tier >= 2 && await Dialog.confirm({
      title: `Swapped?`,
      content: `<p>Did you fail to swap places with the target because one or both of you were too big to fit in the swapped space?</p>`,
      defaultYes: false
    });

    return doFailedSwapDamage ? ` + 1` : undefined;
  }
});
