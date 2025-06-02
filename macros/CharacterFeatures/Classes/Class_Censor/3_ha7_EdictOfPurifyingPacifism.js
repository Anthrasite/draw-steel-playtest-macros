//@id=X341lbxjOIa5mLEH
//@name=Edict of Purifying Pacifism
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Edict of Purifying Pacifism",
  resourceCost: 7,
  flavorText: "You shed a righteous energy that punishes enemies who would harm you or your allies.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "2 aura",
  target: "Each enemy in the area",
  effect: "Until the end of the encounter or until you are dying, whenever a target makes a strike, they take holy damage equal to twice your Presence score. A target judged by you takes an extra 2d6 holy damage."
});
