//@id=gvzFeIT8NryPA4O5
//@name=Expert Sage
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Expert Sage",
  description: `Whenever you make a test as part of a research or crafting project that uses a skill you have from the lore skill group, you can roll the test twice and use either roll.`,
  source: "Perk"
});
