//@id=jma7dcJVsxyCh1WE
//@name=Extension of My Arm
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Extension of My Arm",
  flavorText: "When you draw your whip back after an attack, your enemy comes ever closer.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 3",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 + M or A damage; vertical pull 1",
  tier2Effect: "7 + M or A damage; vertical pull 2",
  tier3Effect: "10 + M or A damage; vertical pull 3"
});
