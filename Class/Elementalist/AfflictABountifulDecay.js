await game.macros.getName("ShareAbility").execute({
  name: "Afflict a Bountiful Decay",
  flavorText: "Your curse causes a foe’s flesh to rot off as spores that aid your allies.",
  keywords: "Green, Rot, Magic, Ranged, Strike",
  type: "Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Reason",
  tier1Effect: "2 + R corruption damage",
  tier2Effect: "4 + R corruption damage",
  tier3Effect: "6 + R corruption damage",
  effect: "You or one ally within distance can end one effect that is ended by a saving throw or that ends at the end of that creature’s turn."
});