//@id=UqlItk0uvWhPFAHx
//@name=The Flesh, a Crucible
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "The Flesh, a Crucible",
  resourceCost: 3,
  flavorText: "Fire engulfs a target of your choice and burns at your command.",
  keywords: "Fire, Magic, Ranged, Strike",
  type: "Action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "5 + R fire damage",
  tier2Effect: "8 + R fire damage",
  tier3Effect: "11 + R fire damage",
  persistentCost: 1,
  persistentEffect: "If the target is within distance at the start of your turn, make a power roll for this ability again."
});
