//@id=Q8qSChJBn7i21RYe
//@name=Lie Detector
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lie Detector",
  description: `In response to another creature communicating information to you, you can spend a hero token to determine whether that information contained any knowing lies. If so, you know what the lies are, but not what the truth is.`,
  source: "Perk"
});
