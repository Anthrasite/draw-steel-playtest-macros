//@id=IN1WCsOEbARcfqVy
//@name=Specialist
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Specialist",
  description: `You are a leading expert on a particular subject. Choose one skill you have from the lore skill group. You always have a double edge on tests made to recall lore that use this skill. Additionally, you have at least one major contribution to this field, such as a thesis, field guide, gazetteer, or even an ongoing newsletter you maintain. This contribution grants you notoriety in your field. You treat your Renown as 1 higher when negotiating with people who know of your work, or 2 higher if they have the skill that you chose for this perk.`,
  source: "Perk"
});
