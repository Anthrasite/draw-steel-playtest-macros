//@id=mYSix1IoThP85O3c
//@name=One Hundred Throats
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "One Hundred Throats",
  flavorText: "As you move across the battlefield, every foe within reach feels your wrath.",
  resourceCost: 5,
  keywords: "Melee, Weapon",
  type: "Main Action",
  distance: "Self; see below",
  target: "Self",
  powerRollStat: "Agility",
  tier1Effect: "3 damage",
  tier2Effect: "6 damage",
  tier3Effect: "9 damage",
  effect: "You shift up to your speed and make one power roll that targets up to three enemies who came adjacent to you during the move."
});
