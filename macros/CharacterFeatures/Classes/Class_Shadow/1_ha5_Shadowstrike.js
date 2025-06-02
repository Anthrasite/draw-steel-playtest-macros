//@id=YOlSxHmKpMogEGF8
//@name=Shadowstrike
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Shadowstrike",
  flavorText: "They have no idea what the college taught you.",
  resourceCost: 5,
  keywords: "Magic, Melee, Ranged",
  type: "Main Action",
  distance: "Self; see below",
  target: "Self",
  effect: "You use a strike signature ability twice."
});
