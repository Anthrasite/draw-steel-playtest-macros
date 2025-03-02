//@id=baRkGuOAm0IqWy72
//@name=Coup de Grace
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
const resourceCost = 5;

await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Coup de Grace",
  flavorText: "Your blade might be the last thing they see.",
  resourceCost,
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "1d6 + 7 + A damage",
  tier2Effect: "1d6 + 11 + A damage",
  tier3Effect: "1d6 + 16 + A damage",
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
