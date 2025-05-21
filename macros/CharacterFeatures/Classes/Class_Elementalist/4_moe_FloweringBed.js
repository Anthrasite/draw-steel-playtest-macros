//@id=pA8FEeHyOGW465of
//@name=Flowering Bed
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Flowering Bed",
  description: "While you have 3 or more essence and you aren’t dying, you exude an aura of magic. The area of effect of the aura is equal to your Reason score. When you end your turn, each ally in the aura gains temporary Stamina equal to your Reason score.",
  source: "Class"
});
