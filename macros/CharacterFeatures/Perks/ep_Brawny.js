//@id=bU5S1I84Hd0B7usP
//@name=Brawny
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Brawny",
  description: "When you fail a Might test, you can roll a d6. You lose Stamina equal to the roll and improve the result of your test by one tier. You can use this perk only once per test.",
  source: "Perk"
});
