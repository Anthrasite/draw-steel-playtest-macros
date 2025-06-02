//@id=MEfH3qk6jJubeto9
//@name=Lucky Dog
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lucky Dog",
  description: `Whenever you fail a test using any skill from the intrigue skill group, you can lose Stamina equal to 1d6 + your level to improve the outcome of the test by one tier. You can use this perk only once per test.`,
  source: "Perk"
});
