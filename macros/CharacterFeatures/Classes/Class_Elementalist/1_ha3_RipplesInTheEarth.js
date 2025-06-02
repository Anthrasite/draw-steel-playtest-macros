//@id=iAau8XKxVDdSykIL
//@name=Ripples in the Earth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Ripples in the Earth",
  resourceCost: 3,
  flavorText: "Like a stone was dropped into a pond, waves in the earth radiate from you.",
  keywords: "Area, Earth, Magic",
  type: "Main Action",
  distance: "2 burst",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "3 damage",
  tier2Effect: "5 damage",
  tier3Effect: "8 damage; M < strong, prone",
  effect: "You must be touching the ground to use this ability. Additionally, you can choose a square of ground in the area that is unoccupied or is occupied by you or any ally. A pillar of earth rises out of the ground in that square, with a height in squares up to your Reason score. The pillar can’t collide with any creatures or objects, nor can it force creatures raised by it to collide with other creatures or objects."
});
