//@id=kzOd6t9KZ0sLPNcu
//@name=Dancer
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Dancer",
  flavorText: "You enter a flow state that makes you nearly impossible to pin down.",
  resourceCost: 7,
  keywords: "-",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: "Until the end of the encounter, whenever an enemy moves adjacent to you or damages you, you can take the Disengage move action as a free triggered action."
});
