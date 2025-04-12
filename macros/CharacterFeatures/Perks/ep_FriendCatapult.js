//@id=3FjCyqHrbxiAX26f
//@name=Friend Catapult
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Friend Catapult",
  description: "As a maneuver, you can grab a willing, adjacent ally or object of your size or smaller and hurl them a number of squares equal to twice your Might score in any direction. If they fall as a result of this movement, their fall distance is reduced by a number equal to twice your Might score. You can't use this perk again until you gain at least 1 Victory.",
  source: "Perk"
});
