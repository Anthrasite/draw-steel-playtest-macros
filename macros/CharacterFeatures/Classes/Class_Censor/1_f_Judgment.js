//@id=1Wbezp8tCRxuvSJY
//@name=Judgment
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Judgment",
  flavorText: "You utter a prayer that outlines your foe in holy energy.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Ranged 10",
  target: "One enemy",
  effect: `The target is judged by you until the end of the encounter, you use this ability again, you willingly end this effect (no action required), or another censor judges the target.</p>
    <p>Whenever a creature judged by you uses a main action and is within your line of effect, you can use a free triggered action to deal holy damage equal to twice your Presence score to them.</p>
    <p>When a creature judged by you is reduced to 0 Stamina, you can use a free triggered action to use this ability against a new target.`,
  extraResourceCost: "1",
  extraResourceEffect: `You can take one of the following free triggered actions. You can choose only one free triggered action option at a time, even if multiple options are triggered by the same effect:</p>
    <ul>
      <li>When an adjacent creature judged by you starts to shift, you make a melee free strike against them and their speed becomes 0 until the end of the current turn, preventing them from shifting.</li>
      <li>When a creature judged by you within 10 squares makes a power roll, you cause them to take a bane on the roll.</li>
      <li>When a creature judged by you within 10 squares uses an ability with a potency that targets only one creature, the potency is reduced by 1 for that creature.</li>
      <li>If you damage a creature judged by you with a melee ability, the creature is taunted by you until the end of their turn.</li>
    </ul>`
});
