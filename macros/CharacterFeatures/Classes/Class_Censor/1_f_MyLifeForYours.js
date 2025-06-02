//@id=ylvzeM0RYSupGDVI
//@name=My Life For Yours
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "My Life For Yours",
  flavorText: "You channel some of your vitality into more resilience for you or an ally.",
  keywords: "Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "Self or one ally",
  trigger: "The target starts their turn or takes damage.",
  effect: "You spend a Recovery and the target regains Stamina equal to your recovery value.",
  extraResourceCost: "1",
  extraResourceEffect: "You can end one condition or effect on the target that is ended by a saving throw or that ends at the end of their turn, or a prone target can stand up."
});
