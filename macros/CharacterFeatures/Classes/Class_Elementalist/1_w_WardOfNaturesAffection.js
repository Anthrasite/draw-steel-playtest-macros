//@id=ej9HpGTILqNxiZuY
//@name=Ward of Nature's Affection
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ward of Nature's Affection",
  description: "You store green energy within your body that allows you to produce powerful vines when you’re in danger. Whenever a creature within a number of squares equal to your Reason score deals damage to you, you can use a free triggered action to slide that creature up to a number of squares equal to your Reason score.",
  source: "Class"
});
