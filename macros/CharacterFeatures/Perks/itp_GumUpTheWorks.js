//@id=2oUv0yf3sBgdRHJL
//@name=Gum Up the Works
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Gum Up the Works",
  description: `Whenever a mundane trap activates within 3 squares, you can use a triggered action to move up to 3 squares toward it. If this movement brings you adjacent to any of the trap’s mechanisms, you can jam the trap, preventing it from activating. As long as you stay adjacent to the mechanism, the trap can’t go off unless an attempt to disarm it fails.`,
  source: "Perk"
});
