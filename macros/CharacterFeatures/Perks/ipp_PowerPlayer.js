//@id=oiBDv5VP1Fkt6bIX
//@name=Power Player
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Power Player",
  description: `Whenever you make a test that uses the Brag, Flirt, or Intimidate skills, you can use Might in place of any other characteristic the test calls for.`,
  source: "Perk"
});
