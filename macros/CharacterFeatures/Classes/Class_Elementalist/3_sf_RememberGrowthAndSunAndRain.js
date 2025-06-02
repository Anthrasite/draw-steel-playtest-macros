//@id=gsXe7WLYc4x3Toj5
//@name=Remember Growth and Sun and Rain
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Remember Growth and Sun and Rain",
  flavorText: "You stir any wood’s memory and learn what it has seen.",
  type: "Main Action",
  keywords: "Green, Magic, Melee",
  distance: "Melee 1",
  target: "One mundane wooden object",
  effect: "You see and hear any events that have occurred within 10 squares of the object within the last 12 hours, perceiving those events from the object’s location as if you were there."
});
