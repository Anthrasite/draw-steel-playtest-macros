//@id=jbPkL0mQ1w93lsVd
//@name=Grasp of Beyond
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Grasp of Beyond",
  flavorText: "You absorb the life energy of another creature and use it to teleport.",
  type: "Main Action",
  keywords: "Magic, Melee, Strike, Void",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "3 + R corruption damage",
  tier2Effect: "6 + R corruption damage",
  tier3Effect: "9 + R corruption damage",
  effect: "You can teleport up to a number of squares equal to your Reason score."
});

