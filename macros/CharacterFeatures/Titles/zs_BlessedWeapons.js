//@id=2OMQtJWIx3EUznjp
//@name=Blessed Weapons
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Blessed Weapons",
  description: `When you use an ability that deals damage that has no type, you can deal holy damage instead.`,
  source: "Title"
});
