//@id=1LSIG5wZ7C3HyYmT
//@name=Your Pain My Gain
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Your Pain My Gain",
  description: "When you gain insight from using a surge, you gain 1 additional insight for a total of 2.",
  source: "Class"
});
