//@id=BzMPVXvKm5wIUDQs
//@name=Devastating Rush
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Devastating Rush",
  flavorText: "The faster you move, the harder you hit.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "1 creature or object",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 + M or A damage",
  tier2Effect: "6 + M or A damage",
  tier3Effect: "13 + M or A damage",
  effect: "You can move up to 3 squares straight toward the target before this strike. You deal extra damage equal to the distance moved this way.",
  getExtraDamageFunc: async function(rollResult) {
    const squaresMoved = Number(await game.macros.getName(`ShowSimpleInputDialog`).execute({ title: `Squares moved`, label: `Squares moved straight toward the target`, allowNegative: false }));
    return squaresMoved > 0 ? ` + ${Math.min(3, squaresMoved)}` : undefined;
  }
});
