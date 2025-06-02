//@id=bP71EsJLZh4VKuNp
//@name=Edict of Disruptive Isolation
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Edict of Disruptive Isolation",
  resourceCost: 7,
  flavorText: "The evil within your foes detonates with holy fire that burns only the guilty.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "2 aura",
  target: "Each enemy in the area",
  effect: "Until the end of the encounter or until you are dying, each target takes holy damage equal to your Presence score at the end of each of your turns. A target takes an extra 2d6 holy damage if they are judged by you or if they are adjacent to any enemy."
});
