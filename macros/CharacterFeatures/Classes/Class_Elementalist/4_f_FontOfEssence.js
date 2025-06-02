//@id=LyIX76jf5lexGJ4i
//@name=Font of Essence
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Font of Essence",
  description: "The first time each combat round that you or a creature within 10 squares takes damage that isn’t untyped or holy damage, you gain 2 essence instead of 1.",
  source: "Class"
});
