const resourceCost = 3;

await game.macros.getName("ShareAbility").execute({
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
    return await game.macros.getName(`Shadow_CalculateAbilityCost`).execute({ resourceCost });
  },
  getAllowedEdgeBaneFunc: async function(currResourceCost) {
    return await game.macros.getName(`Shadow_GetAllowedEdgeBane`).execute({ defaultResourceCost: resourceCost, currResourceCost });
  },
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.macros.getName(`Shadow_OnSurge`).execute();
  }
});