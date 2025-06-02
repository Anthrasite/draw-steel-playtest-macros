//@id=70zYVUoWLrq6abeH
//@name=Ward of Delightful Consequences
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ward of Delightful Consequences",
  description: "A protective field of void magic absorbs violence aimed at you, then lets you hurl it back at your enemies. The first time each round that you take damage, you gain 1 surge.",
  source: "Class",
  onUseFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});
