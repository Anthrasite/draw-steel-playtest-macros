//@id=UmnigF1GRMsvhOxc
//@name=Behold a Shield of Faith!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Behold a Shield of Faith!",
  resourceCost: 3,
  flavorText: "A mighty blow turns your foe’s vitality into a holy light that envelops you and an ally, discouraging enemies who might attack you.",
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "3 + M holy damage",
  tier2Effect: "6 + M holy damage",
  tier3Effect: "9 + M holy damage",
  effect: "Until the start of your next turn, enemies take a bane on ability rolls made against you or any ally adjacent to you."
});
