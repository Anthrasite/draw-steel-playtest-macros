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
  target: "1 creature",
  powerRollStat: "Might, Reason, Intuition, or Presence",
  tier1Effect: "5 + M, R, I, or P damage; stability reduced by 2 (EoT)",
  tier2Effect: "8 + M, R, I, or P damage; stability reduced by 3 (EoT)",
  tier3Effect: "11 + M, R, I, or P damage; stability reduced by 4 (EoT)"
});
