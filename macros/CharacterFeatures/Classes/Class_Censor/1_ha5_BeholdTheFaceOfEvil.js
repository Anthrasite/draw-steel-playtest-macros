//@id=iFBMa7K9tQXGdVlh
//@name=Behold the Face of Justice!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Behold the Face of Justice!",
  resourceCost: 5,
  flavorText: "You attack a foe and your enemies behold a vision of the true nature of your resolve.",
  keywords: "Magic, Melee, Ranged, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "3 + M holy damage; if the target has P < weak, each enemy within 2 squares of them is frightened of you (save ends)",
  tier2Effect: "5 + M holy damage; if the target has P < average, each enemy within 2 squares of them is frightened of you (save ends)",
  tier3Effect: "8 + M holy damage; if the target has P < strong, each enemy within 2 squares of them is frightened of you (save ends)",
  effect: "Each enemy frightened this way is pushed up to 2 squares away from the target and takes psychic damage equal to your Presence score."
});
