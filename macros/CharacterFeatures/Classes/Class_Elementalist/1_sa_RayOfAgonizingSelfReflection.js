//@id=MNuBY1p2trCaFlRv
//@name=Ray of Agonizing Self-Reflection
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Ray of Agonizing Self-Reflection",
  flavorText: "You inflict pain and doubt in equal measure.",
  type: "Main Action",
  keywords: "Magic, Ranged, Strike, Void",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "2 + R corruption damage; R < weak, slowed (save ends)",
  tier2Effect: "4 + R corruption damage; R < average, slowed (save ends)",
  tier3Effect: "6 + R corruption damage; R < strong, slowed (save ends)"
});

