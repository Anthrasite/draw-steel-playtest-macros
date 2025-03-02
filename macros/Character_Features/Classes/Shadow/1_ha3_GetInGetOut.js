//@id=ywZko9u0rLnHjeMx
//@name=Get In Get Out
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
const resourceCost = 3;

await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Get In Get Out",
  flavorText: "Move unexpectedly, strike fast, and be gone!",
  resourceCost,
  keywords: "Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "5 + A damage",
  tier2Effect: "8 + A damage",
  tier3Effect: "11 + A damage",
  effect: "You can shift up to your speed, dividing that movement before or after your strike as desired.",
  getResourceCostFunc: async function() {
    return await game.dsmacros.executeMacroFromCompendium(`Shadow_CalculateAbilityCost`, { resourceCost });
  },
  getAllowedEdgeBaneFunc: async function(currResourceCost) {
    return await game.dsmacros.executeMacroFromCompendium(`Shadow_GetAllowedEdgeBane`, { defaultResourceCost: resourceCost, currResourceCost });
  },
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.dsmacros.executeMacroFromCompendium(`Shadow_OnSurge`);
  }
});
