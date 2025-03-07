//@id=UmnigF1GRMsvhOxc
//@name=Behold, a Shield of Faith!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Behold, a Shield of Faith!",
  resourceCost: 3,
  flavorText: "\"Allow me to intercede.\"",
  keywords: "Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "3 + M holy damage",
  tier2Effect: "6 + M holy damage",
  tier3Effect: "9 + M holy damage",
  effect: "Until the start of your next turn, enemies have a bane on ability power rolls made against you and each ally adjacent to you."
});
