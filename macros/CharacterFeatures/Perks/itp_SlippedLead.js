//@id=tE6WvHnagpXOUYZV
//@name=Slipped Lead
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Slipped Lead",
  description: `You have an edge on checks made to escape bonds. Given at least 1 minute uninterrupted, you can escape any mundane bonds without making a test. Additionally, it’s not immediately obvious when you’ve escaped bonds until you use an ability that harms other creatures, cast them off, or do something else obvious that makes it clear you are unbound.`,
  source: "Perk"
});
