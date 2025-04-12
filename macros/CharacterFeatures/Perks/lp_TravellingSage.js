//@id=1dpXEyxluzeC6m9c
//@name=Travelling Sage
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Travelling Sage",
  description: `On a day when you don’t take a respite, you can spend an uninterrupted hour working on a research project that uses a lore skill you have. If you do so, you gain 1d10 points toward that project.`,
  source: "Perk"
});
