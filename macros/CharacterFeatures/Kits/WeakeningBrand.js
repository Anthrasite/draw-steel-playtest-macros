//@id=p0ZXV4th7JSoDxEa
//@name=Weakening Brand
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Weakening Brand",
  flavorText: "The impact of your weapon brands your target for destruction.",
  keywords: "Magic, Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "1 creature or object",
  powerRollStat: "Might, Reason, Intuition, or Presence",
  tier1Effect: "3 + M, R, I or P holy damage",
  tier2Effect: "5 + M, R, I or P holy damage",
  tier3Effect: "8 + M, R, I or P holy damage",
  effect: "The target has damage weakness equal to the characteristic score you used on this ability’s power roll (EoT)."
});
