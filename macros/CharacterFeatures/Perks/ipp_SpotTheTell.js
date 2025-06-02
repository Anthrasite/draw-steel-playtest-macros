//@id=ndESBuMflx5eDzCN
//@name=Spot the Tell
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Spot the Tell",
  description: `Whenever you make a test to read a person and obtain a tier 3 outcome, you notice several tells that give away their true feelings. Any test you make to read that person in the future gains an edge.`,
  source: "Perk"
});
