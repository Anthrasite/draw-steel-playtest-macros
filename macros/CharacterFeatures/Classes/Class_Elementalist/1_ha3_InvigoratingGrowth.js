//@id=XCkJ4Plb6AWgxmGa
//@name=Invigorating Growth
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Invigorating Growth",
  resourceCost: 3,
  flavorText: "Mushrooms erupt from a foe, sapping their vitality to spread strengthening spores.",
  keywords: "Green, Magic, Ranged, Strike",
  type: "Main Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "4 + R poison damage",
  tier2Effect: "7 + R poison damage",
  tier3Effect: "11 + R poison damage",
  effect: "Mushrooms cover the target’s body. While the mushrooms are on the target, you and any ally adjacent to the target gain 1 surge whenever the target takes damage. The mushrooms can be removed by the target or an adjacent creature as a main action."
});
