//@id=orn1RTFbjvJ7UmuG
//@name=Wall of Fire
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Wall of Fire",
  resourceCost: 7,
  flavorText: "A blazing, beautifully organized inferno erupts at your command.",
  type: "Maneuver",
  keywords: "Area, Fire, Magic, Ranged",
  distance: "10 wall within 10",
  target: "Special",
  effect: "The wall lasts until the start of your next turn, and can be placed in occupied squares. Creatures can enter and pass through the wall. Each enemy who enters the area for the first time in a combat round or starts their turn there takes fire damage equal to your Reason score.",
  persistentCost: 1,
  persistentEffect: "The wall lasts until the start of your next turn, and you can add a number of squares to the wall equal to your Reason score."
});
