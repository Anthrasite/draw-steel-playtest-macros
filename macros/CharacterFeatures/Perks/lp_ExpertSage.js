//@id=gvzFeIT8NryPA4O5
//@name=Expert Sage
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Expert Sage",
  description: `Whenever you make a test as part of a crafting or research project using a skill from the lore skill group, you can make the power roll twice and use either roll.`,
  source: "Perk"
});
