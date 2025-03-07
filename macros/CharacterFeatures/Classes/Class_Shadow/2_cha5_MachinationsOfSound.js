//@id=dGy25YCpFDcLtmeE
//@name=Machinations of Sound
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Machinations of Sound",
  flavorText: "Illusory sounds make your foes reposition themselves as they cower or investigate the disturbance.",
  resourceCost: 5,
  keywords: "Area, Magic, Ranged",
  type: "Maneuver",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Agility",
  tier1Effect: "Slide 4",
  tier2Effect: "Slide 5",
  tier3Effect: "Slide 7",
  effect: "This forced movement ignores stability. Instead, the forced movement is reduced by a number equal to the target’s Intuition score."
});
