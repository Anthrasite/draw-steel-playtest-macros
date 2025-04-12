//@id=2oUv0yf3sBgdRHJL
//@name=Gum Up the Works
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Gum Up the Works",
  description: `When a mundane trap activates within 3 squares of you, you can move up to 3 squares toward it as a triggered action. If you’re adjacent to any of the trap’s mechanisms after this movement, you jam the trap, preventing it from activating. So long as you stay adjacent to the mechanism, the trap can’t go off. If an attempt to disarm the trap you are stall fails, it goes off.`,
  source: "Perk"
});
