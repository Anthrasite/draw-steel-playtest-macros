//@id=1ghyHL8fD59WVGXb
//@name=Open Book
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Open Book",
  description: `When you have a chance to speak one-on-one with someone, you can ask them one question about themself. If they choose to answer honestly, they can immediately ask you a question about yourself in turn, which you must answer honestly. If they choose not to answer honestly, they simply deflect or redirect the question, no further complications result from the prying.`,
  source: "Perk"
});
