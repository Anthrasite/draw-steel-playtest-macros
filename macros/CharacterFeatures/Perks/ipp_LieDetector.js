//@id=Q8qSChJBn7i21RYe
//@name=Lie Detector
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Lie Detector",
  description: `After another creature communicates with you, you can spend a hero token to determine whether what that creature communicated had any lies. If so, you know what the lies are, but not what the truth is.`,
  source: "Perk"
});
