//@id=Hg4cXiPuwqJ7KROU
//@name=Ride
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Ride",
  type: "Move Action",
  description: `You can only take the <i>Ride</i> move action while mounted on another creature. When take the <i>Ride</i> move action, you cause your mount to move up to their speed, taking you with them. Alternatively, you can use this move action to have your mount use the <i>Disengage</i> move action as a free triggered action. A mount can only be ridden with this move action once per round.`
});
