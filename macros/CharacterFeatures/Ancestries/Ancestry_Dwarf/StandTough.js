//@id=kZ8RUMt2GmlrCX5h
//@name=Stand Tough
//@img=icons/magic/earth/strike-fist-stone.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Stand Tough",
  description: "Your body is made to withstand the blows of your enemies. Your Might score is treated as 1 higher for the purpose of resisting potencies, and you gain an edge on Might tests when called for to resist environmental effects or a creature’s traits or abilities.",
  source: "Ancestry"
});
