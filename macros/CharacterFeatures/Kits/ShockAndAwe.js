//@id=8DiPCVBNp9mUglSv
//@name=Shock and Awe
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Shock and Awe",
  flavorText: "You execute a brutal strike that leaves your foe reeling.",
  keywords: "Melee, Ranged, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1 or Ranged 10",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 + M or A damage",
  tier2Effect: "6 + M or A damage",
  tier3Effect: "8 + M or A damage",
  effect: "The target has a bane on their next power roll made before the end of their next turn."
});
