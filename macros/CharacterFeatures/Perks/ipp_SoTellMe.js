//@id=YL1lWwuRpzoJFh6a
//@name=So, Tell Me ...
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "So, Tell Me ...",
  description: `Whenever you succeed on a Presence test to influence one or more creatures, you can ask one creature you influenced a follow-up question after the test resolves, which they must answer honestly. At the Director’s discretion, the creature doesn’t have to answer the question completely—or at all—if the response would put them or a loved one in danger.`,
  source: "Perk"
});
