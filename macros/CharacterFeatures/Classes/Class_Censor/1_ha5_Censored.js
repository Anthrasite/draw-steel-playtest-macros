//@id=cs51C7XzTA4NZUFL
//@name=Censored
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Censored",
  resourceCost: 5,
  flavorText: "Judged and sentenced.",
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "2 + M holy damage",
  tier2Effect: "3 + M holy damage",
  tier3Effect: "5 + M holy damage",
  effect: "When a target who is not a leader or solo creature is made winded by this ability, they are reduced to 0 Stamina."
});
