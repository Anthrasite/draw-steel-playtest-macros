//@id=uHUG4FAM3S9Xpshx
//@name=Afflict a Bountiful Decay
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Afflict a Bountiful Decay",
  flavorText: "Your curse causes your foe’s flesh to rot off as spores that aid your allies.",
  keywords: "Green, Magic, Ranged, Rot, Strike",
  type: "Main Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "2 + R corruption damage",
  tier2Effect: "4 + R corruption damage",
  tier3Effect: "6 + R corruption damage",
  effect: "Choose yourself or one ally within distance. That character can end one condition or effect on them that is ended by a saving throw or that ends at the end of their turn."
});
