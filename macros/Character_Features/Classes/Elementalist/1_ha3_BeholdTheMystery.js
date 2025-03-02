//@id=y4TXHdul7o69wASP
//@name=Behold the Mystery
//@img=icons/magic/nature/beam-hand-leaves-green.webp
const name = "Behold the Mystery"
const resourceCost = 3;

await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name,
  resourceCost,
  flavorText: "You open a rift into the void to harry your foes.",
  keywords: "Area, Magic, Ranged, Void",
  type: "Action",
  distance: "3 cube within 10",
  target: "Each enemy in the area",
  powerRollStat: "Reason",
  tier1Effect: "2 psychic damage",
  tier2Effect: "4 psychic damage",
  tier3Effect: "6 psychic damage",
  persistentCost: 1,
  persistentEffect: "At the start of your turn, you can use a maneuver to use this ability again without spending essence.",
  getResourceCostFunc: async function() {
    const persistentCosts = await game.dsmacros.executeMacroFromCompendium(`GetPersistentCost`);
    return Object.keys(persistentCosts).length && Object.hasOwn(persistentCosts, name) ? 0 : resourceCost;
  }
});
