await game.macros.getName("ShareTrait").execute({
  name: "Barbed Tail",
  description: "Your pointy tail allows you to punctuate all your actions. Once per round, you can deal extra damage equal to your highest characteristic score on a melee strike.",
  source: "Ancestry",
  onUseFunc: async function() {
    const barbedTailDamage = await game.macros.getName(`GetCharacteristic`).execute({ characteristicName: `Agility` });
    const roll = await new Roll(barbedTailDamage.toString()).evaluate();
    await game.macros.getName(`SendRollToChat`).execute({
      roll,
      flavor: `Barbed Tail damage`
    });
  }
});