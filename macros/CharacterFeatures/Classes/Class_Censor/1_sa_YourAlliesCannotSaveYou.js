//@id=heTa4RUDCsFP3Kwu
//@name=Your Allies Cannot Save You!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Your Allies Cannot Save You!",
  flavorText: "Your magic strike turns your foe’s guilt into a burst of holy power.",
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "3 + M holy damage",
  tier2Effect: "5 + M holy damage",
  tier3Effect: "8 + M holy damage",
  effect: "Each enemy adjacent to the target is pushed away from the target up to a number of squares equal to your Presence score."
});
