await game.macros.getName("ShareAbility").execute({
  name: "No More Than a Breeze",
  resourceCost: 5,
  flavorText: "The material substance of a creature shreds away at your command.",
  keywords: "Magic, Ranged, Void",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "Self or one ally",
  effect: "Until the start of your next turn, the target can move through solid matter, ignores difficult terrain, and their movement can’t provoke opportunity attacks. If the target ends their turn inside solid matter, they are shunted out into the space where they entered it and this effect ends.",
  extraResourceCost: "1",
  extraResourceEffect: "The effect lasts until the start of your next turn."
});