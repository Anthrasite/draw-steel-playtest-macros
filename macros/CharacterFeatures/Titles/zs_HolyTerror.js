//@id=lB3CT7tq5AREkiYX
//@name=Holy Terror
//@img=icons/skills/trades/academics-merchant-scribe.webp
const extraDamageStat = `Reason, Intuition, or Presence`;

await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Holy Terror",
  flavorText: "Return to your grave!",
  resourceCost: 3,
  keywords: "Area, Magic",
  type: "Maneuver",
  distance: "3 burst",
  target: "All enemies",
  effect: `Each undead creature in the area takes holy damage equal to your ${extraDamageStat} score (your choice) and is P < [strong] frightened (save ends).`,
  beforeRollFunc: async function() {
    const holyDamage = Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor, powerRollStat: extraDamageStat }));
    const roll = await new Roll(holyDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Holy damage`
    });
  }
});
