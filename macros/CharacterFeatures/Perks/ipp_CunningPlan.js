//@id=ZEWg0RoKnpu8thxN
//@name=Cunning Plan
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Cunning Plan",
  description: `When you have at least 10 minutes to plan before going into a negotiation, you can declare a goal and offer up at least one piece of information you have about that NPC that will enable you to achieve that goal. If this intel is accurate and meaningful, you gain 1 Hero token which can be used to achieve that goal. If you have additional information, or your information is particularly extensive, you can gain a second Hero token at the Director’s discretion.`,
  source: "Perk"
});
