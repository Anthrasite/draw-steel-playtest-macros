//@id=0eGUbTXYHqSAw3ch
//@name=Instantaneous Excavation
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Instantaneous Excavation",
  resourceCost: 5,
  flavorText: "The surface of the world around you opens up at your command.",
  keywords: "Earth, Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Special",
  description: "You open up two holes with 1-square openings that are 4 squares deep, and which can be placed on any mundane surface within distance. You can place these holes next to each other to create fewer holes with wider openings. When the holes open, make a separate power roll for each creature on the ground above a hole and small enough to fall in. (You can’t get a critical hit with this power because it uses a maneuver.)",
  powerRollStat: "Reason",
  tier1Effect: "The target can shift 1 square from the edge of the hole to the nearest unoccupied space of their choice.",
  tier2Effect: "The target falls into the hole.",
  tier3Effect: "The target falls into the hole and can’t reduce the height of the fall.",
  persistentCost: 1,
  persistentEffect: "At the start of your turn, you open another hole, rolling power against any creature that could fall into the hole when it opens."
});
