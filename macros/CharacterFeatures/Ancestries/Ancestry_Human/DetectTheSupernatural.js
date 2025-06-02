//@id=opxciTtfDub27wqC
//@name=Detect the Supernatural
//@img=icons/environment/people/commoner.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Detect the Supernatural",
  description: "As a maneuver, you open your awareness to detect supernatural creatures and phenomena. Until the end of your next turn, you know the location of any supernatural object, or any undead, construct, or creature from another world within 5 squares, even if you don’t have line of effect to that object or creature. You know if you’re detecting an item or a creature, and you know the nature of any creature you detect.",
  source: "Ancestry"
});
