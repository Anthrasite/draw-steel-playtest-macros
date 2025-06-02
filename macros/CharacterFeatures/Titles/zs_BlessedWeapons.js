//@id=2OMQtJWIx3EUznjp
//@name=Blessed Weapons
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Blessed Weapons",
  description: `Whenever you use a damage-dealing weapon ability, that ability can deal holy damage instead of its usual damage type.`,
  source: "Title"
});
