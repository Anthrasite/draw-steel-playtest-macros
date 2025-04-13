//@id=TMr2h7lRbHjtzFmw
//@name=Net and Stab
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Net and Stab",
  flavorText: "The well-thrown net that follows your main attack leaves your foes right where you want them.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 2",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 + M or A damage; A < weak, slowed (EoT)",
  tier2Effect: "6 + M or A damage; A < average, slowed (EoT)",
  tier3Effect: "8 + M or A damage; A < strong, restrained (EoT)"
});
