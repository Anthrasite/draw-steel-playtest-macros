//@id=HiFb3k4oJEC8XPue
//@name=Heal
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  name: "Heal",
  type: "Action",
  description: `You use your action to employ medicine or inspiring words to make an adjacent creature feel better and stay in the fight. The creature can spend a Recovery to regain Stamina, or can make a saving throw against a "(save ends)" effect they are suffering.`
});
