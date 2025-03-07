//@id=BvOFW0iUSuRbaQ8K
//@name=The Gods Punish and Defend
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "The Gods Punish and Defend",
  resourceCost: 3,
  flavorText: "You channel holy energy to smite a foe and heal an ally.",
  keywords: "Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "5 + M holy damage",
  tier2Effect: "8 + M holy damage",
  tier3Effect: "11 + M holy damage",
  effect: "You can spend a Recovery to allow yourself or one ally within 10 squares of you to regain Stamina equal to your Recovery value."
});
