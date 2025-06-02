//@id=fBuk67neb1K5hxYG
//@name=Subvert the Green Within
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Subvert the Green Within",
  resourceCost: 5,
  flavorText: "Fungal spores sprout inside your enemy’s brain, allowing you to control their actions.",
  type: "Main Action",
  keywords: "Green, Magic, Ranged, Strike, Void",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "5 + R poison damage",
  tier2Effect: "9 + R poison damage",
  tier3Effect: "12 + R poison damage",
  effect: "The target uses their signature ability against a creature of your choice. This signature ability can target the creature even if it usually wouldn’t. You then make a power roll against the target of this ability."
});
