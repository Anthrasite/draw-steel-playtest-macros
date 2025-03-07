//@id=nec5GHEo1df0NwKM
//@name=Back, Blasphemer!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Back, Blasphemer!",
  flavorText: "You channel power through your weapon to repel foes.",
  keywords: "Area, Magic, Weapon",
  type: "Action",
  distance: "2 cube within 1",
  target: "Each enemy in the area",
  powerRollStat: "Presence",
  tier1Effect: "2 holy damage; push 1",
  tier2Effect: "4 holy damage; push 2",
  tier3Effect: "6 holy damage; push 3"
});
