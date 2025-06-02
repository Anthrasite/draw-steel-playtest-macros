//@id=UqlItk0uvWhPFAHx
//@name=The Flesh, a Crucible
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "The Flesh, a Crucible",
  resourceCost: 3,
  flavorText: "Fire engulfs your target and continues to churn.",
  keywords: "Fire, Magic, Ranged, Strike",
  type: "Main Action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "5 + R fire damage",
  tier2Effect: "8 + R fire damage",
  tier3Effect: "11 + R fire damage",
  persistentCost: 1,
  persistentEffect: "If the target is within distance at the start of your turn, you can make the power roll again without spending essence."
});
