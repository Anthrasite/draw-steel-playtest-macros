//@id=9WmH2UFKyfEGTvlV
//@name=Fade
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Fade",
  flavorText: "A stab, and a few quick, careful steps back.",
  keywords: "Melee, Ranged, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1 or ranged 10",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 + M or A damage; you shift 1 square",
  tier2Effect: "6 + M or A damage; you shift up to 2 squares",
  tier3Effect: "8 + M or A damage; you shift up to 3 squares"
});
