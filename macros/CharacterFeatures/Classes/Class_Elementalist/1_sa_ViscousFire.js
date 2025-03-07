//@id=Iy4lnCih1tmQDzMP
//@name=Viscous Fire
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Viscous Fire",
  flavorText: "A jet of heavy fire erupts with elemental fury where it strikes.",
  type: "Action",
  keywords: "Fire, Magic, Ranged, Strike",
  distance: "Ranged 10",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "2 + R fire damage; push 2",
  tier2Effect: "5 + R fire damage; push 3",
  tier3Effect: "7 + R fire damage; push 4"
});
