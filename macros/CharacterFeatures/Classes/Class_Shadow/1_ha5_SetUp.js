//@id=HKGiFY9uxe6LIJmb
//@name=Set-Up
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Set-Up",
  flavorText: "Your friends will thank you.",
  resourceCost: 5,
  keywords: "Ranged, Strike, Weapon",
  type: "Action",
  distance: "Ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "6 + A damage; R < weak, the target has damage weakness 5 (save ends)",
  tier2Effect: "9 + A damage; R < average, the target has damage weakness 5 (save ends)",
  tier3Effect: "13 + A damage; R < strong, the target has damage weakness 5 (save ends)"
});
