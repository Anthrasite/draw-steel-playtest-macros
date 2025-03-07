//@id=IsEqrB3nFQYiKyzf
//@name=Hesitation is Weakness
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  name: "Hesitation is Weakness",
  flavorText: "Keep up the attack. Never give them a moment's grace.",
  resourceCost: 1,
  keywords: "-",
  type: "Free Triggered",
  distance: "Self",
  target: "Self",
  trigger: "Another hero ends their turn. That hero can’t have used this ability to start their turn.",
  effect: "You take your turn after the triggering hero."
});
