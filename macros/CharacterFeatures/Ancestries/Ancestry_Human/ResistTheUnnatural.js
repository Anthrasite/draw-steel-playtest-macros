//@id=fX8m9UIvPdH0F5pJ
//@name=Resist the Unnatural
//@img=icons/environment/people/commoner.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Resist the Unnatural",
  description: "Your connection to the natural world protects you from unnatural forces. When you take damage that isn’t untyped, you can use your triggered action to half the damage.",
  source: "Ancestry"
});
