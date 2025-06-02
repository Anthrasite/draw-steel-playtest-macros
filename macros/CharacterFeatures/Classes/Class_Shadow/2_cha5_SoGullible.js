//@id=xZqQgmNlIDSbe9pG
//@name=So Gullible
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "So Gullible",
  flavorText: "When your enemy strikes, you reveal you were in a different place all along.",
  resourceCost: 5,
  keywords: "Magic",
  type: "Free Triggered",
  distance: "Self",
  target: "Self",
  trigger: "Another creature targets you with a strike.",
  effect: "You use your Clever Trick ability with no insight cost against the triggering creature and strike. You can teleport to an unoccupied space within 3 squares of that creature and can make a free strike against them. You can then spend a Recovery."
});
