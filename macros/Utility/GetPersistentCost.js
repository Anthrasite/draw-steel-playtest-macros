const persistentCostString = (await game.macros.getName(`GetAttribute`).execute({ attributeName: `persistentCost` })).value;
let persistentCosts = {};
if (persistentCostString)
  for (const pc of persistentCostString.split(";")) {
    const pcSplit = pc.split(":");
    persistentCosts[pcSplit[0]] = Number(pcSplit[1]);
  }

return persistentCosts;