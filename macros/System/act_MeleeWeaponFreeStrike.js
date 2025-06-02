//@id=reinsTU07KmpQlcA
//@name=Melee Weapon Free Strike
//@img=icons/weapons/swords/shortsword-guard-worn.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Melee Weapon Free Strike",
  keywords: "Charge, Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might or Agility",
  tier1Effect: "2 + M or A damage",
  tier2Effect: "5 + M or A damage",
  tier3Effect: "7 + M or A damage"
});

