//@id=3Oyj69xFEgkHwJoW
//@name=Conflagration
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Conflagration",
  resourceCost: 5,
  flavorText: "A storm of fire descends upon your enemies.",
  keywords: "Area, Fire, Magic, Ranged",
  type: "Action",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "4 fire damage",
  tier2Effect: "6 fire damage",
  tier3Effect: "10 fire damage",
  persistentCost: 2,
  persistentEffect: "At the start of your turn, you can use a maneuver to use this ability again without spending essence."
});
