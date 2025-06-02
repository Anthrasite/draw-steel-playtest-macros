//@id=RjHl6gd2APqcX1tb
//@name=Divine Health
//@img=icons/skills/trades/academics-merchant-scribe.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Divine Health",
  description: `You gain corruption immunity equal to your highest characteristic score. Additionally, you can’t be turned into an undead creature.`,
  source: "Title"
});
