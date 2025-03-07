//@id=K2ETZg56kmi0upGY
//@name=Erase
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Erase",
  resourceCost: 7,
  flavorText: "With a flick of the wrist, you phase creatures out of existence.",
  type: "Action",
  keywords: "Magic, Ranged, Strike, Void",
  distance: "Ranged 10",
  target: "Special",
  description: "The number of creatures you target with this ability is determined by your power roll.",
  powerRollStat: "Reason",
  tier1Effect: "One creature",
  tier2Effect: "Two creatures",
  tier3Effect: "Three creatures",
  effect: "Each target begins to fade from existence (save ends). While fading from existence, a target initially takes a bane on power rolls. At the end of their first turn, they have a double bane on power rolls. At the end of their second turn, they fade from existence for 1 hour, reappearing in their original space or the nearest available space."
});
