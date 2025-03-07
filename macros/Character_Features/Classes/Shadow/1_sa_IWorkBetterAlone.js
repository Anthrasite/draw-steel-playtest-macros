//@id=0gVIHWSjOdtepar9
//@name=I Work Better Alone
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  name: "I Work Better Alone",
  flavorText: "It’s better, just you and me. Isn’t it?",
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "3 + A damage",
  tier2Effect: "6 + A damage",
  tier3Effect: "9 + A damage",
  effect: "If the target has no allies adjacent to them, this strike deals extra damage equal to your Agility score.",
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.macros.getName(`Shadow_OnSurge`).execute();
  },
  getExtraDamageFunc: async function() {
    const isAlone = !await Dialog.confirm({
      title: `Target alone?`,
      content: `<p>Does the target have any allies adjacent to them?</p>`,
      defaultYes: false
    });
    return isAlone ? ` + ${await game.macros.getName(`GetCharacteristic`).execute({ characteristicName: `Agility` })}` : undefined;
  }
});
