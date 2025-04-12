//@id=x0UotpJ1fs8jQNRT
//@name=Forgettable Face
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Forgettable Face",
  description: `If you interact with a creature for less than 10 minutes and they haven’t met you before in the past, you can cause them to forget your face when you part. If asked to describe you, they give only a vague, blank, and unhelpful description. Additionally, if you spend at least 1 hour assembling a disguise, creatures who meet you in that disguise do not recognize your true face later from when you were in disguise.`,
  source: "Perk"
});
