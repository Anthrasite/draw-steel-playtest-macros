//@id=YOlSxHmKpMogEGF8
//@name=Shadowstrike
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Shadowstrike",
  flavorText: "They have no idea what the college taught you.",
  resourceCost: 5,
  keywords: "Magic, Melee, Ranged",
  type: "Action",
  distance: "Self; see below",
  target: "Self",
  effect: "You make two signature strikes."
});
