//@id=QmcGhH0sK2D1PvBk
//@name=Edict of Stillness
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Edict of Stillness",
  resourceCost: 7,
  flavorText: "Flee not from just punishment.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "2 aura",
  target: "Each enemy in the area",
  effect: "Until the end of the encounter or you are dying, whenever a target is force moved or moves willingly out of the aura, they take holy damage equal to twice your Presence score. A target judged by you who moves willingly takes an extra 2d6 holy damage."
});
