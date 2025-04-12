//@id=a6lfhsLUzyxnT5Xj
//@name=Handy
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Handy",
  description: `When you make a test to craft something and don’t have a skill that applies, you gain a +1 bonus to the roll.`,
  source: "Perk"
});
