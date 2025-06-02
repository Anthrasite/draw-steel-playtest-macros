//@id=tvp0XqV9UIDYzjs7
//@name=Two Shot
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Two Shot",
  flavorText: "When you fire two arrows back-to-back, both hit their mark.",
  keywords: "Ranged, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Ranged 12",
  target: "Two creatures or objects",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 damage",
  tier2Effect: "6 damage",
  tier3Effect: "8 damage"
});
