//@id=nIXSHJjTNQ9dwqgk
//@name=Criminal Contacts
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Criminal Contacts",
  description: `You have access to a network of criminal contacts. As a respite activity during a respite in a settlement, you can ask a question of your contacts. Make a Presence test. On a tier 2 result, you gain knowledge that would be common among criminals (e.g. the secret entrances into a building, the location of a local, hidden criminal, the name of a local thieves’ guild leader). On a tier 3 result, you can also gain knowledge that would be uncommon among criminals, if such information exists (e.g. the location of a local treasure stock, the location of a murder weapon used in a noble’s assassination, the name of an NPC secretly bankrolling a local assassin’s guild).`,
  source: "Perk"
});
