//@id=ZvwnrSOEda3k5Mzq
//@name=Aid Attack
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Aid Attack",
  type: "Maneuver",
  description: `Choose an enemy adjacent to you. The next ability power roll an ally who makes against that creature before the start of your next turn has an edge.`
});
