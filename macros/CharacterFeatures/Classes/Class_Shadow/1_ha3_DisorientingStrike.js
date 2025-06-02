//@id=JZ5V3MlGKsHwUNd7
//@name=Disorienting Strike
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Disorienting Strike",
  flavorText: "Your attack leaves them reeling, allowing you to follow up.",
  resourceCost: 3,
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "4 + A damage; slide 2",
  tier2Effect: "6 + A damage; slide 3",
  tier3Effect: "10 + A damage; slide 5",
  effect: "You can shift into any square the target leaves when you slide them."
});
