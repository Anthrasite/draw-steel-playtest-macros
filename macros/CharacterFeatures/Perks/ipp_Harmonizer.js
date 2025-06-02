//@id=10aNcKQXVMuiGtsJ
//@name=Harmonizer
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Harmonizer",
  description: `You can make a Presence test using the Music skill to influence creatures who don’t have emotions or can’t understand you. Additionally, once during a negotiation when an ally makes an argument, you can play music to give that ally an edge on their test.`,
  source: "Perk"
});
