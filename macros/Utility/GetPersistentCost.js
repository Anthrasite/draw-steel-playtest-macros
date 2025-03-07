//@id=czRakNtrsZFDoWij
//@name=GetPersistentCost
//@img=icons/svg/dice-target.svg
const activeActor = await game.macros.getName(`ValidateParameter`).execute({ name: `activeActor`, value: scope.activeActor, type: `object` });

const persistentCostString = (await game.macros.getName(`GetAttribute`).execute({ activeActor, attributeName: `persistentCost` })).value;
let persistentCosts = {};
if (persistentCostString)
  for (const pc of persistentCostString.split(";")) {
    const pcSplit = pc.split(":");
    persistentCosts[pcSplit[0]] = Number(pcSplit[1]);
  }

return persistentCosts;
