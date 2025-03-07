//@id=Aoa04ym7XchjtRNF
//@name=Repent!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Repent!",
  resourceCost: 3,
  flavorText: "You conjure memories of their sins.",
  keywords: "Magic, Ranged, Strike",
  type: "Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Presence",
  tier1Effect: "5 + P holy damage; I < weak, dazed (save ends)",
  tier2Effect: "8 + P holy damage; I < average, dazed (save ends)",
  tier3Effect: "11 + P holy damage; I < strong, dazed (save ends)"
});
