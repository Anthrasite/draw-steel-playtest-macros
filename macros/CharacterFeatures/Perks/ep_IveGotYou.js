//@id=RsOuNLBDVd6Pxi0S
//@name=I've Got You!
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "I've Got You!",
  description: "Whenever a willing ally falls and would land on you or adjacent to you, you can safely catch them as a free triggered action. Neither of you takes damage from the ally’s fall.",
  source: "Perk"
});
