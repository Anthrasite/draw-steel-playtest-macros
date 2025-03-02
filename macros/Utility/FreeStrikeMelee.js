//@id=e6mloKM1BYV2IDr0
//@name=FreeStrikeMelee
//@img=icons/svg/dice-target.svg
const onSurgeFunc = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `onSurgeFunc`, value: scope.onSurgeFunc, type: `function`, nullable: true });

await game.dsmacros.executeMacroFromCompendium("ShareAbility", {
  name: "Melee Weapon Free Strike",
  keywords: "Charge, Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "1 creature or object",
  powerRollStat: "Might or Agility",
  tier1Effect: "2 + M or A damage",
  tier2Effect: "5 + M or A damage",
  tier3Effect: "7 + M or A damage",
  onSurgeFunc
});
