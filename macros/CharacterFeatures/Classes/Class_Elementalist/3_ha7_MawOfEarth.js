//@id=OvAY7Dh4Wp1PHTbS
//@name=Maw of Earth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Maw of Earth",
  resourceCost: 7,
  flavorText: "You open up the ground, spewing out shrapnel of stone and debris.",
  type: "Main Action",
  keywords: "Area, Earth, Magic, Ranged",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "5 damage",
  tier2Effect: "9 damage",
  tier3Effect: "12 damage",
  effect: "The ground in or directly beneath the area drops 3 squares."
});
