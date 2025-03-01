await game.macros.getName("ShareFeature").execute({
  name: "Ward of Delightful Consequences",
  description: "A protective field of void magic absorbs violence aimed at you, then lets you hurl it back at your enemies. The first time each round that you take damage, you gain a surge.",
  source: "Class",
  onUseFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ attributeName: "surges", value: 1, isDelta: true });
  }
});