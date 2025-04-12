//@id=RFcHVOi1frMhe82v
//@name=Expert Artisan
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Expert Artisan",
  description: `Whenever you make a test as part of a research or crafting project that uses a skill you have from the crafting skill group, you can roll the test twice and use either roll.`,
  source: "Perk"
});
