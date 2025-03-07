//@id=eSX4cNtP1yuY0nof
//@name=Defend
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Defend",
  type: "Action",
  description: `When you take the <i>Defend</i> action, all ability power rolls made against you have a double bane until the start of your next turn. You gain no benefit from this action while another creature is taunted by you.`
});
