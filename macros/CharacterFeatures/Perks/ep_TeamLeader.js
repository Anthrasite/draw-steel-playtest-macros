//@id=PUWI7pJirsKufb5X
//@name=Team Leader
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Team Leader",
  description: "At the start of a group test or montage test, you can spend a hero token. If you do, all participants make tests as if they also had any skill you have from the exploration group.",
  source: "Perk"
});
