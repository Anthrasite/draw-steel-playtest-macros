//@id=72LMwvuseNtZJraf
//@name=Swarm of Spirits
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Swarm of Spirits",
  resourceCost: 7,
  flavorText: "Guardian animal spirits surround you to harry your foes and bolster your allies.",
  type: "Action",
  keywords: "Area, Green, Magic",
  distance: "3 aura",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "3 damage",
  tier2Effect: "6 damage",
  tier3Effect: "9 damage",
  effect: "Until the end of your next turn, each ally in your aura has their characteristic scores increased by 1 for the purpose of resisting potencies and has a +1 bonus on saving throws.",
  persistentCost: 1,
  persistentEffect: "You make the power roll again to target each enemy in the aura, and the effect lasts until the start of your next turn."
});
