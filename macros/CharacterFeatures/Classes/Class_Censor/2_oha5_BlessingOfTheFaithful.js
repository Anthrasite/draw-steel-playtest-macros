//@id=bjTGAnxQ6eMzF51l
//@name=Blessing of the Faithful
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Blessing of the Faithful",
  resourceCost: 5,
  flavorText: "The gods reward your faith.",
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "3 aura",
  target: "Self and each ally in the area",
  effect: "Until the end of the encounter or until you are dying, each target gains 1 surge at the end of each of your turns."
});
