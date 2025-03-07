//@id=ZVwNYBMuO9a0qHnS
//@name=Test of Rain
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Test of Rain",
  resourceCost: 5,
  flavorText: "You call down a rain that burns your enemies and restores your allies.",
  keywords: "Area, Green, Magic, Ranged",
  type: "Action",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "4 acid damage",
  tier2Effect: "6 acid damage",
  tier3Effect: "10 acid damage",
  effect: "You and each ally within the area can end one effect that is ended by a saving throw or that ends at the end of that creature’s turn."
});
