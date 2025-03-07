//@id=3JSUMOHwK9GDc1CE
//@name=Hurl Element
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Hurl Element",
  flavorText: "You cast a ball of elemental energy at an unsuspecting foe.",
  keywords: "Magic, Ranged, Strike",
  type: "Action",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "2 + R damage",
  tier2Effect: "4 + R damage",
  tier3Effect: "6 + R damage",
  effect: "When you make this strike, choose the damage type from one of the following options: acid, cold, corruption, fire, lightning, poison, or sonic."
});
