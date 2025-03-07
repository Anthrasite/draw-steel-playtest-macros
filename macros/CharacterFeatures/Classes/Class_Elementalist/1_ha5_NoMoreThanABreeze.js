//@id=Lxrp2CuA7kOYzgE9
//@name=No More Than a Breeze
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "No More Than a Breeze",
  resourceCost: 5,
  flavorText: "The material substance of a creature shreds away at your command.",
  keywords: "Magic, Ranged, Void",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Self or one ally",
  effect: "Until the start of your next turn, the target can move through solid matter, ignores difficult terrain, and their movement can’t provoke opportunity attacks. If the target ends their turn inside solid matter, they are shunted out into the space where they entered it and this effect ends.",
  persistentCost: 1,
  persistentEffect: "The effect lasts until the start of your next turn."
});
