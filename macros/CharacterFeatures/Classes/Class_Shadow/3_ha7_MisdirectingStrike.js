//@id=jwiA2qaUdnskEuSX
//@name=Misdirecting Strike
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Misdirecting Strike",
  flavorText: "Why are you looking at ME?!",
  resourceCost: 7,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "9 + A damage",
  tier2Effect: "13 + A damage",
  tier3Effect: "18 + A damage",
  effect: "The target is taunted by a willing ally within 5 squares of you until the end of the target’s next turn."
});
