//@id=pFTOleinXw8Iy13m
//@name=Driving Assault
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Driving Assault",
  resourceCost: 3,
  flavorText: "As you force your enemy back with your weapon, you use your faith to stay close.",
  keywords: "Melee, Strike, Weapon",
  type: "Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "3 + M damage; push 1",
  tier2Effect: "6 + M damage; push 3",
  tier3Effect: "9 + M damage; push 5",
  effect: "You can shift up to your speed and must end that shift within distance of the target."
});
