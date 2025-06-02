//@id=y4TXHdul7o69wASP
//@name=Behold the Mystery
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Behold the Mystery",
  resourceCost: 3,
  flavorText: "You open a rift into the void to harry your foes.",
  keywords: "Area, Magic, Ranged, Void",
  type: "Main Action",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "2 psychic damage",
  tier2Effect: "4 psychic damage",
  tier3Effect: "6 psychic damage",
  persistentCost: 1,
  persistentEffect: "At the start of your turn, you can use a maneuver to use this ability again without spending essence."
});
