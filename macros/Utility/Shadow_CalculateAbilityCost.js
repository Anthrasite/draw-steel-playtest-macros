//@id=20AhgaLxcyZsri7z
//@name=Shadow_CalculateAbilityCost
//@img=icons/svg/dice-target.svg
const resourceCost = await game.macros.getName(`ValidateParameter`).execute({ name: `resourceCost`, value: scope.resourceCost, type: `number` });

const decreaseCost = await Dialog.confirm({
  title: `Edge?`,
  content: `<p>Will you have an edge on the power roll (against at least one target)?</p>`,
  rejectClose: true
});

return decreaseCost ? resourceCost - 1 : resourceCost;
