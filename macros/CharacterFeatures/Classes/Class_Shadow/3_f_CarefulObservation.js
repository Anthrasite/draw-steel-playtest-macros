//@id=rtizqck4D8XnvUhw
//@name=Careful Observation
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Careful Observation",
  flavorText: "A moment of focus leaves a foe firmly in your sights.",
  keywords: "-",
  type: "Maneuver",
  distance: "20 squares",
  target: "One creature",
  effect: "As long as you remain within distance of the target, maintain line of effect to them, and strike no other creature first, you gain a surge and an edge on the next strike you make against the assessed creature.",
  beforeRollFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});
