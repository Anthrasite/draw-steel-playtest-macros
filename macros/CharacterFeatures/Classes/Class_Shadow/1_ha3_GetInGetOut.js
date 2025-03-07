//@id=ywZko9u0rLnHjeMx
//@name=Get In Get Out
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Get In Get Out",
  flavorText: "Move unexpectedly, strike fast, and be gone!",
  resourceCost: 3,
  keywords: "Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "5 + A damage",
  tier2Effect: "8 + A damage",
  tier3Effect: "11 + A damage",
  effect: "You can shift up to your speed, dividing that movement before or after your strike as desired."
});
