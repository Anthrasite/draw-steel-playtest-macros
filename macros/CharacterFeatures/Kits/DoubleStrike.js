//@id=jM7gDxersmdAHz3v
//@name=Double Strike
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Double Strike",
  flavorText: "Why strike once when you could do it twice?",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "2 creatures or objects",
  powerRollStat: "Might or Agility",
  tier1Effect: "4 damage",
  tier2Effect: "6 damage",
  tier3Effect: "8 damage",
  effect: "If you use this ability on your turn, you can target one creature or object with it then use your maneuver and move action for that turn before targeting a second creature or object. You still use the same power roll for both targets."
});
