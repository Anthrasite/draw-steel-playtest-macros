//@id=Q6VlRcYv3CgZHnir
//@name=Disengage
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Disengage",
  type: "Move Action",
  description: `When you take the <i>Disengage</i> move action, you can shift 1 square. Some class features, kits, or other rules let you shift more than 1 square when you take this move action. If they do, you can break up the movement granted by this move action with your maneuver and action however you wish.`
});
