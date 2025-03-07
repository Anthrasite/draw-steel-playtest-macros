//@id=IuVmX3wfo2srbP9D
//@name=Glowing Eyes
//@img=icons/creatures/unholy/demon-female-succubus-orange.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Glowing Eyes",
  description: "Your eyes are a solid, vibrant color that flares to show your excitement or rage. Whenever you take damage from a creature, you can use a triggered action to curse that creature for daring to do you harm. The creature takes 1d10 + your level psychic damage.",
  source: "Ancestry",
  onUseFunc: async function() {
    const level = (await game.macros.getName(`GetAttribute`).execute({ activeActor: actor, attributeName: `level` })).value;
    const roll = await new Roll(`1d10 + ${level}`).evaluate();
    await game.macros.getName(`ShareRoll`).execute({
      activeActor: actor,
      roll,
      flavor: `Psychic damage`
    });
  }
});
