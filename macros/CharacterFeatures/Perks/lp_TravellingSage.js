//@id=1dpXEyxluzeC6m9c
//@name=Travelling Sage
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Travelling Sage",
  description: `On any day when you don’t take a respite, you can spend 1 uninterrupted hour working on a research project using a skill you have from the lore skill group. If you do so, you gain 1d10 project points toward that project.`,
  source: "Perk"
});
