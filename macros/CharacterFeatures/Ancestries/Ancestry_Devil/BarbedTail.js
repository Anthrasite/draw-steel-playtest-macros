//@id=hjZ758AbOEC2grQc
//@name=Barbed Tail
//@img=icons/creatures/unholy/demon-female-succubus-orange.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Barbed Tail",
  description: "Your pointy tail allows you to punctuate all your actions. Once per round, you can deal extra damage equal to your highest characteristic score on a melee strike.",
  source: "Ancestry",
  onUseFunc: async function() {
    const barbedTailDamage = Math.max(0, await game.macros.getName(`GetHighestCharacteristic`).execute({ activeActor: actor }));
    const roll = await new Roll(barbedTailDamage.toString()).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Extra damage`
    });
  }
});
