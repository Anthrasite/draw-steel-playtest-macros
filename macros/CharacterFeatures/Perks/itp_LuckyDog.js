//@id=MEfH3qk6jJubeto9
//@name=Lucky Dog
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lucky Dog",
  description: `When you fail a test using any skill from the intrigue skill group, you can roll a d6. You lose Stamina equal to the roll and improve the result of your test by one tier. You can use this perk only once per test.`,
  source: "Perk"
});
