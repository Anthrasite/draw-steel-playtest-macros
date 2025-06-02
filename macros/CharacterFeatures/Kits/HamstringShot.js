//@id=FOWdZy4xkaHAbCRp
//@name=Hamstring Shot
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Hamstring Shot",
  flavorText: "A well-placed shot leaves your enemy struggling to move.",
  keywords: "Ranged, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 + M or A damage; A < weak, slowed (save ends)",
  tier2Effect: "5 + M or A damage; A < average, slowed (save ends)",
  tier3Effect: "7 + M or A damage; A < strong, slowed (save ends)"
});
