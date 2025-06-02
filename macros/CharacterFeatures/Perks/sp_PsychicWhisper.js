//@id=QFXVCmvTnShijDqY
//@name=Psychic Whisper
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Psychic Whisper",
  flavorText: "You send a one-way telepathic message to a friend.",
  keywords: "Psionic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One ally",
  effect: `As long as the target understands one or more languages, you send a telepathic message to them that takes 10 seconds or less to speak. The target knows who the message is from and can decide to ignore it and subsequent messages.`
});
