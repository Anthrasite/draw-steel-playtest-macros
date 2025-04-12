//@id=J5li0qOfuILQBwbZ
//@name=Survivalist
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Survivalist",
  description: "While in the wilderness, you can spend 1 hour searching a 1-mile-radius area of land and find a safe location suitable for a respite (if one exists).",
  source: "Perk"
});
