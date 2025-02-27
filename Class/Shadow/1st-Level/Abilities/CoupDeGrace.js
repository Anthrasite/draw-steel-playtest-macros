const resourceCost = 5;

await game.macros.getName("ShareAbility").execute({
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
    return await game.macros.getName(`Shadow_CalculateAbilityCost`).execute({ resourceCost });
  },
  getAllowedEdgeBaneFunc: async function(currResourceCost) {
    return await game.macros.getName(`Shadow_GetAllowedEdgeBane`).execute({ defaultResourceCost: resourceCost, currResourceCost });
  },
  onSurgeFunc: async function() {
    return await game.macros.getName(`Shadow_OnSurge`).execute();
  }
});