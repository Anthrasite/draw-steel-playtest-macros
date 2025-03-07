//@id=EyxJvM4a8fG1SFoz
//@name=Search for Hidden Creatures
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Search for Hidden Creatures",
  type: "Maneuver",
  description: `You can search for creatures who are hidden from you as long as those creatures are within 10 squares of you and you have line of effect to them. To do so, you make an Intuition test as a maneuver and assess the result.</p>
    <p>As part of this maneuver, you can point out any creatures you find to allies within 10 squares of you, making those creatures no longer hidden from those allies. If a creature is hidden from your allies but not from you, you can use a maneuver without making a test to point them out to your allies.</p>`,
  powerRollStat: "Intuition",
  tier1Effect: "You find any hidden creatures with an Agility of 0 or lower and who don’t have the Hide skill.",
  tier2Effect: "You find any hidden creatures who don’t have the Hide skill.",
  tier3Effect: "You find all hidden creatures."
});
