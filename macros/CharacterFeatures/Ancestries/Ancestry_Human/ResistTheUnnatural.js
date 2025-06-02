//@id=fX8m9UIvPdH0F5pJ
//@name=Resist the Unnatural
//@img=icons/environment/people/commoner.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Resist the Unnatural",
  description: "Your instinctive resilience protects you from injuries beyond the routine. Whenever you take damage that isn’t untyped, you can use a triggered action to take half the damage.",
  source: "Ancestry"
});
