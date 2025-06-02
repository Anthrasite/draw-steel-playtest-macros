//@id=dPTFiseGmJjK3Evu
//@name=Protective Attack
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Protective Attack",
  flavorText: "The strength of your assault makes it impossible for your foe to ignore you.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "5 + M or A damage",
  tier2Effect: "8 + M or A damage",
  tier3Effect: "11 + M or A damage",
  effect: "The target is taunted until the end of their next turn."
});
