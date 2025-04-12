//@id=r7a3uHqXkYdmySiR
//@name=Invisible Force
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Invisible Force",
  flavorText: "You manipulate a tiny object with your mind.",
  keywords: "Psionic",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "1 size 1T unattended object",
  effect: `You can grab or manipulate the target with your mind. You can move the object up to a number of squares equal to your Reason, Intuition, or Presence score (your choice). You can use this ability to turn doorknobs, pull levers, and manipulate other smaller, movable pieces of a larger object as long as the piece you're manipulating is unattended and size 1T (though you can’t use this ability to break smaller piece off of a larger object).`
});
