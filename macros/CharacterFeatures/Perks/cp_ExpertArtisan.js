//@id=RFcHVOi1frMhe82v
//@name=Expert Artisan
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Expert Artisan",
  description: `Whenever you make a test as part of a crafting or research project that uses a skill you already have from the crafting skill group, you can make the power roll twice and use either roll.`,
  source: "Perk"
});
