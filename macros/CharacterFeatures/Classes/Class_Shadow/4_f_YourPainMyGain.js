//@id=1LSIG5wZ7C3HyYmT
//@name=Surge of Insight
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Surge of Insight",
  description: "The first time each combat round that you deal damage incorporating 1 or more surges, you gain 2 insight instead of 1.",
  source: "Class"
});
