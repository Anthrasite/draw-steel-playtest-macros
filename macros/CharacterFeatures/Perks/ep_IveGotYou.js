//@id=RsOuNLBDVd6Pxi0S
//@name=I've Got You!
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "I've Got You!",
  description: "If a willing ally lands on you when they fall, you can use your triggered action to catch them. Neither of you takes damage from the fall.",
  source: "Perk"
});
