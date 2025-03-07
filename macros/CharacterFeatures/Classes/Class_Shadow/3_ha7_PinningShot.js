//@id=ZRKTI4AoWx2tfVaB
//@name=Pinning Shot
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Pinning Shot",
  flavorText: "One missile—placed well and placed hard.",
  resourceCost: 7,
  keywords: "Ranged, Strike, Weapon",
  type: "Action",
  distance: "Ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "8 + A damage; A < weak, restrained (save ends)",
  tier2Effect: "12 + A damage; A < average, restrained (save ends)",
  tier3Effect: "16 + A damage; A < strong, restrained (save ends)"
});
