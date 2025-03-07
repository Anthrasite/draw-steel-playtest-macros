//@id=wr2LM4UzFOuqGjN1
//@name=Escape Grab
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  name: "Escape Grab",
  type: "Maneuver",
  description: `While you are grabbed by another creature, you can attempt to escape by making the following test (which can’t have a skill applied). You take a bane on the roll if the creature’s size is larger than yours.`,
  powerRollStat: "Might or Agility",
  tier1Effect: "You fail to escape the grab.",
  tier2Effect: "You can escape the grab, but if you do, the creature grabbing you can make a melee free strike against you before you are no longer grabbed.",
  tier3Effect: "You are no longer grabbed.",
});
