//@id=LyIX76jf5lexGJ4i
//@name=Font of Essence
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Font of Essence",
  description: "When you gain essence from a creature within 10 squares of you taking damage that isn’t holy or untyped, you gain 1 additional essence.",
  source: "Class"
});
