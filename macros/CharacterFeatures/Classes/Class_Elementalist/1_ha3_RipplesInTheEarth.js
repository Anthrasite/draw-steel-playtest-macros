//@id=iAau8XKxVDdSykIL
//@name=Ripples in the Earth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Ripples in the Earth",
  resourceCost: 3,
  flavorText: "Like a stone dropped into a pond, waves in the earth radiate from you.",
  keywords: "Area, Earth, Magic",
  type: "Action",
  distance: "2 burst",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "3 damage",
  tier2Effect: "5 damage",
  tier3Effect: "8 damage; M < strong, prone",
  effect: "You must be touching the ground to use this ability. Choose a square of ground in the area that is unoccupied or occupied by your or an ally. A pillar of earth that is 1 square wide and long and is up to as many squares tall as your Reason score rises out of the ground. The pillar can’t collide with any creatures or objects nor can it force any creatures being raised by it to collide with other creatures or objects."
});
