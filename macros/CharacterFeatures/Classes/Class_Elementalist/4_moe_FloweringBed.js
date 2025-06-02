//@id=pA8FEeHyOGW465of
//@name=Flowering Bed
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Flowering Bed",
  description: "At the end of each of your turns, each ally in the area gains temporary Stamina equal to your Reason score.",
  source: "Class"
});
