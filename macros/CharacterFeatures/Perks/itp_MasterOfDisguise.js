//@id=ZYoQf5j8HkdNbyuI
//@name=Master of Disguise
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Master of Disguise",
  description: `You can don or remove a disguise as part of any Hide test you make or while taking the Hide maneuver.`,
  source: "Perk"
});
