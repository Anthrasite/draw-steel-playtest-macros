//@id=zKrpAo9N6tCOPyEw
//@name=But I Know Who Does
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "But I Know Who Does",
  description: `When you fail a test to recall lore with a skill from the lore skill group that you have, you know the closest place where the information you seek with that test can be found. It could be a sage, in a library, or somewhere deep in a dungeon. The Director determines the source’s location.`,
  source: "Perk"
});
