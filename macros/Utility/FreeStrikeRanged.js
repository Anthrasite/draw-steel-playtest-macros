//@id=FC2X6UloqTItyxOE
//@name=FreeStrikeRanged
//@img=icons/svg/dice-target.svg
const onSurgeFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `onSurgeFunc`, value: scope.onSurgeFunc, type: `function`, nullable: true });

await game.macros.getName("ShareAbility").execute({
  name: "Ranged Weapon Free Strike",
  keywords: "Ranged, Strike, Weapon",
  type: "Action",
  distance: "Ranged 5",
  target: "1 creature or object",
  powerRollStat: "Might or Agility",
  tier1Effect: "2 + M or A damage",
  tier2Effect: "4 + M or A damage",
  tier3Effect: "6 + M or A damage",
  onSurgeFunc
});
