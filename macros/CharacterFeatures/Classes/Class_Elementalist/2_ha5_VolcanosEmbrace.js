//@id=pFHqOTI3acYgxE9b
//@name=Volcano's Embrace
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Volcano's Embrace",
  resourceCost: 5,
  flavorText: "Wrap them up in fire and melting stone.",
  type: "Main Action",
  keywords: "Earth, Fire, Magic, Ranged, Strike",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "5 + R fire damage; A < weak, restrained (save ends)",
  tier2Effect: "9 + R fire damage; A < average, restrained (save ends)",
  tier3Effect: "12 + R fire damage; A < strong, restrained (save ends)"
});
