//@id=tyBE41DiN9zaUGVH
//@name=Pain for Pain
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
const powerRollStat = "Might or Agility";

await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Pain for Pain",
  flavorText: "An enemy who tagged you will pay for that.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "1 creature",
  powerRollStat,
  tier1Effect: "3 + M or A damage",
  tier2Effect: "5 + M or A damage",
  tier3Effect: "13 + M or A damage",
  effect: "If the target dealt damage to you since the end of your last turn, this strike deals additional damage equal to your Might or Agility score (your choice).",
  getExtraDamageFunc: async function(rollResult) {
    const dealtDamage = await Dialog.confirm({
      title: `Dealt damage?`,
      content: `<p>Has the target dealt damage to you since the end of your last turn?</p>`,
      defaultYes: false
    });

    return dealtDamage ? ` + ${Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor, powerRollStat }))}` : undefined;
  }
});
