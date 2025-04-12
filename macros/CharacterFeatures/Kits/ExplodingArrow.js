//@id=fOZknN4c3AyUqszT
//@name=Exploding Arrow
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
const powerRollStat = "Agility, Reason, Intuition, or Presence";

await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Exploding Arrow",
  flavorText: "Your ammunition explodes with magical energy.",
  keywords: "Magic, Ranged, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Ranged 15",
  target: "1 creature or object",
  powerRollStat,
  tier1Effect: "5 + A, R, I, or P fire damage",
  tier2Effect: "7 + A, R, I, or P fire damage",
  tier3Effect: "10 + A, R, I, or P fire damage",
  effect: "A creature or object within 2 squares of your target takes fire damage equal to the characteristic score you added to this ability’s power roll.",
  afterRollFunc: async function() {
    const isOtherTarget = await Dialog.confirm({
      title: `Other target within 2 squares?`,
      content: `<p>Is a creature or object within 2 squares of your target?</p>`,
      defaultYes: false
    });

    if (isOtherTarget) {
      const extraDamage = Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor, powerRollStat }));
      const roll = await new Roll(extraDamage.toString()).evaluate();
      await game.macros.getName(`ShareRoll`).execute({
        activeActor: actor,
        roll,
        flavor: `Extra fire damage`
      });
    }
  }
});
