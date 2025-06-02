//@id=OkYy0cZsIp5tVJQi
//@name=Ward of Surprising Reactivity
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ward of Surprising Reactivity",
  description: "You use the magic of fire to create a ward of explosive energy. Whenever an adjacent creature deals damage to you, you can use a free triggered action to push that creature up to a number of squares equal to twice your Reason score.",
  source: "Class"
});
