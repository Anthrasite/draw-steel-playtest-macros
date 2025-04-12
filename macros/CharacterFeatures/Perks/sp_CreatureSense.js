//@id=ZpR19OdSJDTi2Lm3
//@name=Creature Sense
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Creature Sense",
  description: `As a maneuver, you can magically learn the keywords a creature of lower level within 10 squares of you has in their stat block (e.g. "Demon," "Humanoid," or "Undead").`,
  source: "Perk"
});
