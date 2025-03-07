await game.macros.getName("ShareAbility").execute({
  name: "Grasp of Beyond",
  flavorText: "You absorb the life energy of another creature and use it to teleport.",
  type: "Action",
  keywords: "Magic, Melee, Strike, Void",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "3 + R corruption damage",
  tier2Effect: "6 + R corruption damage",
  tier3Effect: "9 + R corruption damage",
  effect: "You can teleport up to a number of squares equal to your Reason score."
});
      
