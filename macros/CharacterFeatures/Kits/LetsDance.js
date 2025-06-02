//@id=TVIbH4nActdKo5fS
//@name=Let's Dance
//@img=icons/equipment/shield/buckler-boss-iron-wood-brown.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Let's Dance",
  flavorText: "Keeping your enemies stumbling around the battlefield is second nature to you.",
  keywords: "Melee, Strike, Weapon",
  isKit: true,
  type: "Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might or Agility",
  tier1Effect: "3 + M or A damage",
  tier2Effect: "6 + M or A damage; slide 1",
  tier3Effect: "8 + M or A damage; slide 2",
  effect: "You can shift into any square the target leaves after you slide them."
});
