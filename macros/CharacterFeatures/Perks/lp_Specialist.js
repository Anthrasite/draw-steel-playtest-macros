//@id=IN1WCsOEbARcfqVy
//@name=Specialist
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Specialist",
  description: `You are a leading expert on a particular subject. Choose one skill you have from the lore skill group. You always have a double edge on tests made to recall lore using this skill. Additionally, your specialist knowledge grants you notoriety in fields related to the chosen skill. You treat your Renown as 1 higher when engaged in a negotiation with an NPC who knows your reputation, or 2 higher if they have the same skill you chose for this perk.`,
  source: "Perk"
});
