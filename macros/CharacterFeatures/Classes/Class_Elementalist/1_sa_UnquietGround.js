//@id=o8lC71wI6z9ecp2Y
//@name=Unquiet Ground
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Unquiet Ground",
  flavorText: "A sudden storm of detritus assaults your foes and leaves them struggling to move.",
  type: "Action",
  keywords: "Area, Earth, Magic, Ranged",
  distance: "2 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "2 damage",
  tier2Effect: "5 damage",
  tier3Effect: "7 damage",
  effect: "The ground beneath the area becomes difficult terrain for enemies."
});

