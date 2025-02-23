await game.macros.getName("ShareAbility").execute({
  name: "My Life For Yours",
  flavorText: "The first principle of the oath: defend the righteous.",
  keywords: "Magic, Ranged",
  type: "Triggered",
  distance: "Ranged 10",
  target: "Self or one ally",
  trigger: "The target starts their turn or takes damage.",
  effect: "You spend a Recovery and the target regains Stamina equal to your Recovery value.",
  extraResourceCost: "1",
  extraResourceEffect: "You can end one effect on the target that is ended by a saving throw or that ends at the end of their turn, or a prone target can stand up."
});