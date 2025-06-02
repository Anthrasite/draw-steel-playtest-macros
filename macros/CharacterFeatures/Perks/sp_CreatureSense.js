//@id=ZpR19OdSJDTi2Lm3
//@name=Creature Sense
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Creature Sense",
  description: `As a maneuver, choose a creature within 10 squares. If that creature is your level or lower, you learn the keywords in their stat block (Demon, Humanoid, Undead, and so forth).`,
  source: "Perk"
});
