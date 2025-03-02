//@id=Ongxstlr9zedfEMv
//@name=Grab
//@img=icons/magic/air/air-smoke-casting.webp
await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Grab",
  keywords: "Melee",
  type: "Maneuver",
  distance: "Melee 1",
  target: "1 creature no more than 1 size larger than you",
  powerRollStat: "Might",
  tier1Effect: "No effect",
  tier2Effect: "You can grab the target, but if you do, they can make a melee free strike against you right before they become grabbed by you.",
  tier3Effect: "The target is grabbed by you.",
  effect: `You gain an edge on the power roll if the creature’s size is smaller than yours. You can grab only one creature at a time this way.`
});
