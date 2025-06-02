//@id=SOoCM1Wp35Ik6xld
//@name=The Green Within, The Green Without
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "The Green Within, The Green Without",
  flavorText: "Whipping vines erupt from a foe’s body to grasp at another close by.",
  keywords: "Green, Magic, Ranged, Strike",
  type: "Main Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "2 + R damage",
  tier2Effect: "5 + R damage",
  tier3Effect: "7 + R damage",
  effect: "You slide one creature within 10 squares of the target up to 2 squares."
});
