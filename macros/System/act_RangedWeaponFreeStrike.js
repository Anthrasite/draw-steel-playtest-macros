//@id=P4LJSwdMhKRHrbe3
//@name=Ranged Weapon Free Strike
//@img=icons/weapons/bows/shortbow-recurve.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Ranged Weapon Free Strike",
  keywords: "Ranged, Strike, Weapon",
  type: "Action",
  distance: "Ranged 5",
  target: "1 creature or object",
  powerRollStat: "Might or Agility",
  tier1Effect: "2 + M or A damage",
  tier2Effect: "4 + M or A damage",
  tier3Effect: "6 + M or A damage"
});
