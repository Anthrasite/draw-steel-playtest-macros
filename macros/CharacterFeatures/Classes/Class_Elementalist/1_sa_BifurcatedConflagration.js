//@id=RDe2pKflgC1TL6yr
//@name=Bifurcated Incineration
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Bifurcated Incineration",
  flavorText: "Two jets of flame lance out at your command.",
  type: "Main Action",
  keywords: "Fire, Magic, Ranged, Strike",
  distance: "Ranged 10",
  target: "Two creatures or objects",
  powerRollStat: "Reason",
  tier1Effect: "2 fire damage",
  tier2Effect: "4 fire damage",
  tier3Effect: "6 fire damage"
});

