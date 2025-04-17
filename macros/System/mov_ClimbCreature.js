//@id=czSgR3XMeymC2pvD
//@name=Climb Other Creature
//@img=icons/skills/movement/feet-winged-sandals-tan.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Climb Other Creature",
  type: "Movement",
  description: `You can attempt to climb a creature whose size is greater than yours. If the creature is willing, you can climb them without any trouble. If the creature is unwilling, you make the following test. While you climb or ride a creature, you gain an edge to melee abilities used against them. The creature can use a maneuver to attempt to knock you off.</p>
    <p>If you are knocked prone while climbing or riding a creature, you fall and land prone in an adjacent space of your choice, taking damage as usual from the fall.</p>`,
  powerRollStat: "Might or Agility",
  tier1Effect: "You fail to climb the creature, and they can make a free strike against you.",
  tier2Effect: "You fail to climb the creature.",
  tier3Effect: "You climb the creature.",
  effect: ""
});
