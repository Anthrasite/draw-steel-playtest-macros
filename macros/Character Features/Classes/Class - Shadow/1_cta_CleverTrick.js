//@id=WYeCrfFEbL5siw8N
//@name=Clever Trick
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Clever Trick",
  flavorText: "You sow a moment of confusion in combat, to your enemy’s peril.",
  resourceCost: 1,
  keywords: "Magic",
  type: "Triggered",
  distance: "Self",
  target: "Self",
  trigger: "An enemy targets you with a strike.",
  effect: "Choose an enemy within distance of the triggering strike, including the enemy who targeted you. The strike targets that enemy instead."
});
