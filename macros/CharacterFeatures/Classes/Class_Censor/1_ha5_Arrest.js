//@id=Mfcb5zkTUmWs0pK8
//@name=Arrest
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Arrest",
  resourceCost: 5,
  flavorText: "\"I’ve got you, you son of a bitch.\"",
  keywords: "Magic, Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Might",
  tier1Effect: "6 + M holy damage; grabbed",
  tier2Effect: "9 + M holy damage; grabbed",
  tier3Effect: "13 + M holy damage; grabbed",
  effect: "If the target makes a strike against a creature while grabbed this way, you can spend 3 wrath to deal holy damage to them equal to your Presence score, then change the target of the strike to another target within the strike’s distance."
});
