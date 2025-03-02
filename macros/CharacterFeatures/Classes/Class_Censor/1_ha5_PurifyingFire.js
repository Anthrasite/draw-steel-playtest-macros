//@id=LYJ2CcZjxkEmD1QO
//@name=Purifying Fire
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Purifying Fire",
  resourceCost: 5,
  flavorText: "The gods judge, fire cleanses.",
  keywords: "Magic, Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "5 + M holy damage; M < weak, the target has fire weakness 3 (save ends)",
  tier2Effect: "9 + M holy damage; M < average, the target has fire weakness 5 (save ends)",
  tier3Effect: "12 + M holy damage; M < strong, the target has fire weakness 7 (save ends)",
  effect: "While the target has fire weakness from this ability, you can choose to have your abilities deal fire damage to the target instead of holy damage."
});
