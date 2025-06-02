//@id=zKrpAo9N6tCOPyEw
//@name=But I Know Who Does
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "But I Know Who Does",
  description: `Whenever you fail a test to recall lore using a skill from the lore skill group, you instinctively recall the nearest location where the information you seek might be found. This could be the tower of a local sage, a library in a nearby city, somewhere deep in a dungeon, or any other location of the Director’s determination. The Director can decide that certain lore can’t be revealed this way.`,
  source: "Perk"
});
