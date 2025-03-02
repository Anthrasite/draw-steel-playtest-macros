//@id=czRakNtrsZFDoWij
//@name=GetPersistentCost
//@img=icons/svg/dice-target.svg
const persistentCostString = (await game.dsmacros.executeMacroFromCompendium(`GetAttribute`, { attributeName: `persistentCost` })).value;
let persistentCosts = {};
if (persistentCostString)
  for (const pc of persistentCostString.split(";")) {
    const pcSplit = pc.split(":");
    persistentCosts[pcSplit[0]] = Number(pcSplit[1]);
  }

return persistentCosts;
