//@id=7If053RyaLqHmMFe
//@name=Dazzler
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Dazzler",
  description: `Whenever a creature watches you sing, dance, or perform a role (as an actor, not just in disguise) for 1 minute or more, you gain an edge on any test made to influence that creature for 1 hour after the performance ends.`,
  source: "Perk"
});
