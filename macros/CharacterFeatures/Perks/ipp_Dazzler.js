//@id=7If053RyaLqHmMFe
//@name=Dazzler
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Dazzler",
  description: `When a creature watches you perform a song, dance, or role (as an actor, not in disguise) for at least 1 minute, you gain an edge on tests made to influence that creature for 1 hour after the performance ends.`,
  source: "Perk"
});
