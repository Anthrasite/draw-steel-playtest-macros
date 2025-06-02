//@id=Vzv9PBx6UfuAj1TS
//@name=Hands of the Maker
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Hands of the Maker",
  flavorText: "You craft objects with the power of your mind.",
  keywords: "Magic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "You create a mundane object of size 1S or smaller. You can maintain a number of objects created this way equal to your Presence score. You can destroy an object created this way with a thought, no matter how far you are from it (no action required)."
});
