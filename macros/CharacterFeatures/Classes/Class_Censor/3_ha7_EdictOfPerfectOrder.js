//@id=WwEgxQUFYqbniB1p
//@name=Edict of Perfect Order
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Edict of Perfect Order",
  resourceCost: 7,
  flavorText: "Within the area of your divine presence, your enemies will regret using their fell abilities.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "2 aura",
  target: "Each enemy in the area",
  effect: "Until the end of the encounter or until you are dying, whenever a target uses an ability that costs Malice, they take holy damage equal to three times your Presence score. A target judged by you takes an extra 2d6 holy damage."
});
