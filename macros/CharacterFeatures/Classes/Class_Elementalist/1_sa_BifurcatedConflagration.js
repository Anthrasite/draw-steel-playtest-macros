//@id=RDe2pKflgC1TL6yr
//@name=Bifurcated Conflagration
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Bifurcated Conflagration",
  flavorText: "Two jets of flame lance out at your command.",
  type: "Action",
  keywords: "Fire, Magic, Ranged, Strike",
  distance: "Ranged 10",
  target: "Two creatures or objects",
  powerRollStat: "Reason",
  tier1Effect: "2 fire damage",
  tier2Effect: "4 fire damage",
  tier3Effect: "6 fire damage"
});
      
