//@id=a6lfhsLUzyxnT5Xj
//@name=Handy
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Handy",
  description: `Whenever you make a test to craft something and don’t have a skill that applies to the test, you gain a +1 bonus to the power roll.`,
  source: "Perk"
});
