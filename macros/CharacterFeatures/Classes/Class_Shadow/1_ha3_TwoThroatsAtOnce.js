//@id=yVe31lnpvEUkt8d5
//@name=Two Throats at Once
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Two Throats at Once",
  flavorText: "A bargain.",
  resourceCost: 3,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1 or ranged 5",
  target: "Two creatures or objects",
  powerRollStat: "Agility",
  tier1Effect: "4 damage",
  tier2Effect: "6 damage",
  tier3Effect: "10 damage"
});
