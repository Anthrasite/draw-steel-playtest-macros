//@id=D74ukATniVW8I5QN
//@name=Inspired Artisan
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Inspired Artisan",
  description: `When you make a project roll using a skill from the crafting skill group, you can spend a hero token to make another project roll for the same project as part of the same respite activity. You can’t use this perk more than once per respite.`,
  source: "Perk"
});
