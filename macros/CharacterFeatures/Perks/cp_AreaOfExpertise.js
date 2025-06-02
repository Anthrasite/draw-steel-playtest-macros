//@id=Sj23U8XDohaTBdIJ
//@name=Area of Expertise
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Area of Expertise",
  description: `Choose one skill you already have from the crafting skill group. Whenever you obtain a tier 1 outcome on an easy or medium test using this skill, you treat it as a tier 2 outcome instead. Additionally, if you spend 1 minute inspecting an object related to the chosen skill, you can estimate its value and learn of any flaws in its construction.`,
  source: "Perk"
});
