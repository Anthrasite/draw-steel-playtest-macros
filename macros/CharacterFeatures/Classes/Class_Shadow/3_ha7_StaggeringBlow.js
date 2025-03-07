//@id=yAHxCaJUSpBV5Ij7
//@name=Staggering Blow
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Staggering Blow",
  flavorText: "There’s no recovering from this.",
  resourceCost: 7,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "7 + A damage; M < weak, slowed (save ends)",
  tier2Effect: "11 + A damage; M < average, prone and can’t stand (save ends)",
  tier3Effect: "16 + A damage; M < strong, prone and can’t stand (save ends)"
});
