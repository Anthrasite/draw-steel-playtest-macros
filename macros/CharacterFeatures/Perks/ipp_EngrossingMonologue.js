//@id=8pTWzVJvDgBF0Xyw
//@name=Engrossing Monologue
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Engrossing Monologue",
  description: `Whenever you are not in combat, you can shout to get the attention of hearing creatures within 10 squares of you. Each such creature who is not hostile toward you listens to what you have to say for 1 minute or more, or until they sense danger or any form of imminent harm. While creatures are listening to you, each of your allies gains an edge on tests made to avoid being noticed by those creatures.`,
  source: "Perk"
});
