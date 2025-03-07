//@id=hjZ758AbOEC2grQc
//@name=Barbed Tail
//@img=icons/creatures/unholy/demon-female-succubus-orange.webp
await game.dsmacros.executeMacroFromCompendium("ShareFeature", {
  name: "Barbed Tail",
  description: "Your pointy tail allows you to punctuate all your actions. Once per round, you can deal extra damage equal to your highest characteristic score on a melee strike.",
  source: "Ancestry",
  onUseFunc: async function() {
    const barbedTailDamage = await game.dsmacros.executeMacroFromCompendium(`GetCharacteristic`, { characteristicName: `Agility` });
    const roll = await new Roll(barbedTailDamage.toString()).evaluate();
    await game.dsmacros.executeMacroFromCompendium(`ShareRoll`, {
      roll,
      flavor: `Barbed Tail damage`
    });
  }
});
