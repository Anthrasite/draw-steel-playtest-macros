//@id=O9VjEM8ufRKrP4Ce
//@name=Translated Through Flame
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Translated Through Flame",
  resourceCost: 5,
  flavorText: "Your ally disappears, then reappears in a burst of fire!",
  type: "Action",
  keywords: "Fire, Magic, Ranged, Void",
  distance: "Ranged 10",
  target: "Self or one ally",
  powerRollStat: "Reason",
  tier1Effect: "3 fire damage",
  tier2Effect: "5 fire damage",
  tier3Effect: "8 fire damage",
  effect: "The target is teleported to another space within distance. Make a power roll that targets each enemy adjacent to the target’s new space."
});
