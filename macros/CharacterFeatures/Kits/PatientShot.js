//@id=p5MF7rc1nYZs9NhR
//@name=Patient Shot
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
const powerRollStat = "Might or Agility";

await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Patient Shot",
  flavorText: "Breathe … aim … wait… then strike!",
  keywords: "Ranged, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Ranged 15",
  target: "1 creature",
  powerRollStat,
  tier1Effect: "3 + M or A damage",
  tier2Effect: "6 + M or A damage",
  tier3Effect: "13 + M or A damage",
  effect: "If you don’t take a move action this turn, this strike deals extra damage equal to your Might or Agility score (your choice).",
  getExtraDamageFunc: async function(rollResult) {
    const moved = await Dialog.confirm({
      title: `Moved?`,
      content: `<p>Did you take a move action this turn?</p>`
    });

    return moved ? undefined : ` + ${Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor, powerRollStat }))}`;
  }
});
