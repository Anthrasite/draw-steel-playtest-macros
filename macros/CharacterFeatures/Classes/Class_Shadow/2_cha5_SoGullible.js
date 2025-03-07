//@id=xZqQgmNlIDSbe9pG
//@name=So Gullible
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "So Gullible",
  flavorText: "When your enemy strikes, you reveal you were in a different place all along.",
  resourceCost: 5,
  keywords: "Attack, Melee, Ranged, Magic, Weapon",
  type: "Free Triggered",
  distance: "Self; see below",
  target: "Self",
  trigger: "An enemy strikes you.",
  effect: "You use your Clever Trick ability with no insight cost, causing the creature who made the triggering strike to target an illusory image of you. You appear in an unoccupied space within 3 squares of that creature and can make a free strike against them. You can then spend a Recovery."
});
