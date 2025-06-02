//@id=tE6WvHnagpXOUYZV
//@name=Slipped Lead
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Slipped Lead",
  description: `You gain an edge on tests made to escape bonds. Given 1 uninterrupted minute, you can escape any mundane bonds without making a test. Additionally, it’s not immediately obvious when you’ve escaped bonds until you do something that makes it clear you have done so (cast them off, use an ability that harms one or more creatures, and so forth).`,
  source: "Perk"
});
