//@id=7w3VXPBlEJtKznjT
//@name=Teamwork Has Its Place
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Teamwork Has Its Place",
  flavorText: "You attack an enemy, distracting them long enough for an ally to stab them.",
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature or object",
  powerRollStat: "Agility",
  tier1Effect: "3 + A damage",
  tier2Effect: "6 + A damage",
  tier3Effect: "9 + A damage",
  effect: "If an ally is adjacent to the target, the target takes extra damage equal to your Agility score.",
  getExtraDamageFunc: async function(rollResult) {
    const allyAdjacent = await Dialog.confirm({
      title: `Ally adjacent?`,
      content: `<p>Is there an ally adjacent to the target?</p>`,
      defaultYes: false
    });
    return allyAdjacent ? ` + ${await game.macros.getName(`GetCharacteristic`).execute({ activeActor: actor, characteristicName: `Agility` })}` : undefined;
  }
});
