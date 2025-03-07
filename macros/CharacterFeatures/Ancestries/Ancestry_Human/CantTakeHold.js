//@id=BZzgum3WNjxOqPt5
//@name=Can't Take Hold
//@img=icons/environment/people/commoner.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Can't Take Hold",
  description: "Your connection to the natural world allows you resist supernatural effects. You ignore difficult terrain (but not other effects) created by magic and psionic abilities. Additionally, when you are force moved by a magic or psionic ability, you reduce the forced movement by 1.",
  source: "Ancestry"
});
