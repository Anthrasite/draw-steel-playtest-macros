//@id=Kx82eFakbNioPIMY
//@name=Travelling Artisan
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Travelling Artisan",
  description: `On any day when you don’t take a respite, you can spend 1 uninterrupted hour working on a crafting project using a skill you have from the crafting skill group. If you do so, you gain 1d10 project points toward that project.`,
  source: "Perk"
});
