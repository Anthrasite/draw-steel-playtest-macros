//@id=T1BVRLdkCqGX3nNg
//@name=The Breath of Dawn Remembered
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "The Breath of Dawn Remembered",
  flavorText: "The power you channel grants the ability to get back in the fight.",
  keywords: "Green, Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "Self or one ally",
  trigger: "The target starts their turn or takes damage.",
  effect: "The target can spend a Recovery.",
  extraResourceCost: "1+",
  extraResourceEffect: "The target can spend an additional Recovery for each essence spent."
});
