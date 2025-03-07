await game.macros.getName("ShareAbility").execute({
  name: "Fancy Footwork",
  flavorText: "All combat is a dance—and you’ll be the one leading.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "5 + M or A damage",
  tier2Effect: "7 + M or A damage; push 1",
  tier3Effect: "10 + M or A damage; push 2",
  effect: "You can shift into any square your target leaves after you force move them with this ability."
});