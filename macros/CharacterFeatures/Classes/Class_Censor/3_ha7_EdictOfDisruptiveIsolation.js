//@id=bP71EsJLZh4VKuNp
//@name=Edict of Disruptive Isolation
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Edict of Disruptive Isolation",
  resourceCost: 7,
  flavorText: "Gather not together in secret to conspire.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "2 aura",
  target: "Each enemy in the area",
  effect: "Until the end of the encounter or you are dying, at the end of each of your turns, each target takes holy damage equal to your Presence score. Any target adjacent to one or more enemies takes an extra 2d6 holy damage if they are judged by you or adjacent to one of your enemies."
});
