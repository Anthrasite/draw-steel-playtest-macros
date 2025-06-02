//@id=3FjCyqHrbxiAX26f
//@name=Friend Catapult
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Friend Catapult",
  description: "As a maneuver, you grab a willing adjacent ally or object of your size or smaller, then vertical push that target a number of squares equal to twice your Might score. If a creature you push falls as a result of this movement, the effective distance of the fall is reduced by a number of squares equal to twice your Might score. When you use this perk, you can’t use it again until you earn a Victory.",
  source: "Perk"
});
