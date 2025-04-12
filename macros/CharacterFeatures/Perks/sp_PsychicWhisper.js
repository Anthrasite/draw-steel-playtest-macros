//@id=QFXVCmvTnShijDqY
//@name=Psychic Whisper
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Psychic Whisper",
  flavorText: "You send a one-way telepathic message to a friend.",
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "1 ally who understands at least one language",
  effect: `You send a telepathic message to the target that takes 10 seconds or less to speak.`
});
