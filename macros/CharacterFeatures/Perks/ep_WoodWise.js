//@id=AlpIa5bzNHWh1yeE
//@name=Wood Wise
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Wood Wise",
  description: "When you make a test using a skill from the exploration skill group and at least one of the d10s rolled is a 1, you can reroll one d10. You can use this perk only once per test.",
  source: "Perk"
});
