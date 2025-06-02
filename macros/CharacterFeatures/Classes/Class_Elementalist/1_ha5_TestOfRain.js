//@id=ZVwNYBMuO9a0qHnS
//@name=Test of Rain
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Test of Rain",
  resourceCost: 5,
  flavorText: "You call down a rain that burns your enemies and restores your allies.",
  keywords: "Area, Green, Magic, Ranged",
  type: "Main Action",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "4 acid damage",
  tier2Effect: "6 acid damage",
  tier3Effect: "10 acid damage",
  effect: "You can end one condition or effect on yourself that is ended by a saving throw or that ends at the end of your turn. Each ally in the area also gains this benefit."
});
