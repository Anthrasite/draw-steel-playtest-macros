//@id=mwu95lCKePYtFvbh
//@name=Charming Liar
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Charming Liar",
  description: `If you fail a test using the Lie skill, you don’t suffer any consequences associated with the failure. Additionally, during a negotiation, you can be caught in one lie without negative consequences. When you use either benefit of this perk, you can’t use this perk again until you earn a Victory.`,
  source: "Perk"
});
