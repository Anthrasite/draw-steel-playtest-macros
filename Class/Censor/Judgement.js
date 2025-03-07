await game.macros.getName("ShareAbility").execute({
  name: "Judgment",
  flavorText: "You utter a pray that outlines your foe in holy energy.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One enemy",
  effect: "The target is judged by you until the end of the encounter, you die, you use this ability again, or you willingly end this effect (no action required). If another censor judges the target, then your judgment on the target ends.</br>If a judged creature uses an action and you have line of effect to them, you can use a free triggered action to deal holy damage equal to twice your Presence score to them.</br>When the judged creature is reduced to 0 Stamina, you can use a free triggered action to use this ability against a new target within distance.",
  extraResourceCost: "1",
  extraResourceEffect: "You can take one of the following free triggered actions. You can’t use more than one instance of a benefit per trigger:<ul><li>When an adjacent judged target shifts, you can make a melee free strike against them. The target doesn't shift and their speed becomes 0 until the end of this turn.</li><li>When a judged target makes a power roll, you can add a bane to the roll</li><li>When a judged target within distance uses an ability with a potency against another creature, you reduce the potency of the ability by 1 for that creature (to a minimum of 0).</li></ul>"
});