//@id=baRkGuOAm0IqWy72
//@name=Coup de Grace
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  name: "Coup de Grace",
  flavorText: "Your blade might be the last thing they see.",
  resourceCost: 5,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "1d6 + 7 + A damage",
  tier2Effect: "1d6 + 11 + A damage",
  tier3Effect: "1d6 + 16 + A damage"
});
