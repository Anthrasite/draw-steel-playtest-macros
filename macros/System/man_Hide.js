//@id=PHi2AedhUQsOYpXB
//@name=Hide
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Hide",
  type: "Maneuver",
  description: `Using the <i>Hide</i> maneuver, you attempt to hide from other creatures who aren’t observing you while you have cover or concealment.`
});
