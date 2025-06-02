//@id=syYQMaFbEvdUcxpi
//@name=Every Step ... Death!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Every Step ... Death!",
  flavorText: "You show your foe a glimpse of their fate after death.",
  keywords: "Magic, Ranged, Strike",
  type: "Main Action",
  distance: "Ranged 10",
  target: "One creature",
  powerRollStat: "Presence",
  tier1Effect: "5 + P psychic damage",
  tier2Effect: "7 + P psychic damage",
  tier3Effect: "10 + P psychic damage",
  effect: "Each time the target willingly moves before the end of your next turn, they take 1 psychic damage for each square they move."
});
