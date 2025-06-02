//@id=r7a3uHqXkYdmySiR
//@name=Invisible Force
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Invisible Force",
  flavorText: "You manipulate a tiny object with your mind.",
  keywords: "Psionic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One size 1T object",
  effect: `You can grab or manipulate the target object with your mind, moving the object up to a number of squares equal to your Reason, Intuition, or Presence score (your choice). You can use this ability to turn doorknobs, pull levers, and so forth. You can manipulate any small movable piece of a larger object as long as the piece is unattended and size 1T. You can’t use this ability to break a smaller piece off a larger object.`
});
