//@id=tXHVGzreuaFThf25
//@name=Persistent
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Persistent",
  description: `In a negotiation, when a creature’s patience reaches 0, you can make one last argument before the negotiation is over. Only one hero can use this perk per negotiation.`,
  source: "Perk"
});
