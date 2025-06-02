//@id=IdStsf4JyOHhCNia
//@name=Linguist
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Linguist",
  description: `You automatically learn two new languages, as long as you have regularly heard those languages spoken or seen them written before. Additionally, if you spend 7 days or more in a place where you regularly hear or read a language you don’t know, you can pick up enough of that language to hold a conversation or understand basic written information. Having picked up a language this way, you can subsequently learn it using the Learn New Language research project at half the usual project goal cost.`,
  source: "Perk"
});
