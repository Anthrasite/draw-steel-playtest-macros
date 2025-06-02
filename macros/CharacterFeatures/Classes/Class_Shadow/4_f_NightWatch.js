//@id=RpLUv40TGYM6Kflm
//@name=Night Watch
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Night Watch",
  flavorText: "A steely dagger from out of the blue knocks another weapon off course.",
  keywords: "Ranged, Weapon",
  type: "Triggered",
  distance: "Ranged 5",
  target: "One ally",
  trigger: "The target takes damage from another creature’s ability while you are hidden.",
  effect: "The target takes half the damage. You remain hidden."
});
