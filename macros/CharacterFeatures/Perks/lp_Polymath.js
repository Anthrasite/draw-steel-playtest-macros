//@id=GXpbJI5eSKWlBcn6
//@name=Polymath
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Polymath",
  description: `Whenever you make a test to recall lore and don’t have a skill that applies to the test, you gain a +1 bonus to the power roll.`,
  source: "Perk"
});
