//@id=Oqx5g14i6Pla38pz
//@name=Knockback
//@img=icons/magic/air/air-smoke-casting.webp
await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Knockback",
  keywords: "Melee, Weapon",
  type: "Maneuver",
  distance: "Melee 1",
  target: "1 creature no more than 1 size larger than you",
  powerRollStat: "Might",
  tier1Effect: "Push 1",
  tier2Effect: "Push 2",
  tier3Effect: "Push 3",
  effect: "You gain an edge on the power roll if the creature’s size is smaller than yours."
});
