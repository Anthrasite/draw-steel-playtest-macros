//@id=iw127GCu6pfbeAYa
//@name=Forward Thrust, Backward Smash
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Forward Thrust, Backward Smash",
  flavorText: "In your hands, the haft is as good as the head.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 2",
  target: "Two creatures or objects",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 damage",
  tier2Effect: "7 damage",
  tier3Effect: "9 damage"
});
