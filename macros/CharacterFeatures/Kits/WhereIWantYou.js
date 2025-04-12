//@id=oT8wB5ZW0CXeD4am
//@name=Where I Want You
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Where I Want You",
  flavorText: "When your stick speaks, your enemy moves.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 2",
  target: "1 creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 + M or A damage",
  tier2Effect: "7 + M or A damage; slide 1",
  tier3Effect: "10 + M or A damage; slide 3"
});
