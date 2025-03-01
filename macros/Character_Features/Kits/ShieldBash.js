//@id=Z7tCnrgKNXPW5BhR
//@name=Shield Bash
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  name: "Shield Bash",
  flavorText: "In your hands, a shield isn’t just for protection.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 + M or A damage; push 1",
  tier2Effect: "7 + M or A damage; push 2",
  tier3Effect: "9 + M or A damage; push 3; M < [strong] prone"
});
