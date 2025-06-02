//@id=GWhRfKMOFtE6VALn
//@name=Leaping Lightning
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
const powerRollStat = "Might, Reason, Intuition, or Presence";

await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Leaping Lightning",
  flavorText: "Lightning jumps from your weapon as you strike to harm a nearby foe.",
  keywords: "Magic, Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat,
  tier1Effect: "5 + M, R, I, or P lightning damage",
  tier2Effect: "8 + M, R, I, or P lightning damage",
  tier3Effect: "11 + M, R, I, or P lightning damage",
  effect: "A creature or object of your choice within 2 squares of the target takes lightning damage equal to the characteristic score used for this ability’s power roll.",
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
        flavor: `Extra lightning damage`
      });
    }
  }
});
