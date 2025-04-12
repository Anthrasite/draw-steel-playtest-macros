//@id=Sj23U8XDohaTBdIJ
//@name=Area of Expertise
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Area of Expertise",
  description: `Choose one skill from the crafting skill group that you have. When you roll an 11 or lower on an easy or medium test with this skill, you instead take the 12-16 result. Additionally, if you spend 1 minute inspecting an object related to this skill, you can approximate its value and learn of any flaws in its construction.`,
  source: "Perk"
});
