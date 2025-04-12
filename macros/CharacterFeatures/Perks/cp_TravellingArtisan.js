//@id=Kx82eFakbNioPIMY
//@name=Travelling Artisan
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Travelling Artisan",
  description: `On a day when you don’t take a respite, you can spend an uninterrupted hour working on a crafting project that uses a crafting skill you have. If you do so, you gain 1d10 points toward that project.`,
  source: "Perk"
});
