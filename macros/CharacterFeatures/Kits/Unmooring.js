//@id=FtvLwPaMgoCheVjm
//@name=Unmooring
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Unmooring",
  flavorText: "Your weapon unleashes psionic energy that reduces your target’s weight.",
  keywords: "Melee, Psionic, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might, Reason, Intuition, or Presence",
  tier1Effect: "5 + M, R, I, or P damage",
  tier2Effect: "8 + M, R, I, or P damage",
  tier3Effect: "11 + M, R, I, or P damage",
  effect: "Until the end of the target’s next turn, any forced movement that affects the target has its distance increased by 2."
});
