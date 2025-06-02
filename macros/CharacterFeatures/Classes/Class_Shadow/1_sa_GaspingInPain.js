//@id=czx3bLBQtem0E968
//@name=Gasping in Pain
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Gasping in Pain",
  flavorText: "Your precise strikes let your allies take advantage of a target’s agony.",
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "3 + A damage",
  tier2Effect: "5 + A damage",
  tier3Effect: "8 + A damage; I < strong, prone",
  effect: "One ally within 5 squares of the target gains 1 surge."
});
