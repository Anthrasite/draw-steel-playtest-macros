//@id=orn1RTFbjvJ7UmuG
//@name=Wall of Fire
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Wall of Fire",
  resourceCost: 7,
  flavorText: "A blazing, beautifully organized inferno erupts at your command.",
  type: "Maneuver",
  keywords: "Area, Fire, Magic, Ranged",
  distance: "10 wall within 10",
  target: "Special",
  effect: "The wall lasts until the start of your next turn, and can be placed in occupied squares. Creatures can enter and pass through the wall. When an enemy enters or starts their turn in a square of the wall, they take fire damage equal to your Reason score.",
  persistentCost: 1,
  persistentEffect: "The effect lasts until the start of your next turn, and you can add a number of squares to the wall equal to your Reason score."
});
