//@id=72LMwvuseNtZJraf
//@name=Swarm of Spirits
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Swarm of Spirits",
  resourceCost: 7,
  flavorText: "Guardian animal spirits surround you to harry your foes and bolster your allies.",
  type: "Main Action",
  keywords: "Area, Green, Magic",
  distance: "3 aura",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "3 damage",
  tier2Effect: "6 damage",
  tier3Effect: "9 damage",
  effect: "Until the end of your next turn, each ally in the area has each of their characteristics treated as 1 higher for the purpose of resisting potencies, and has a +1 bonus to saving throws.",
  persistentCost: 1,
  persistentEffect: "You make the power roll again to target each enemy in the area without spending essence, and the effect lasts until the start of your next turn."
});
