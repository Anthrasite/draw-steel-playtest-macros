//@id=bKCjDd1YTrnyi0sa
//@name=Halt Miscreant!
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Halt Miscreant!",
  flavorText: "You infuse your weapon with holy magic that makes it difficult for your foe to get away.",
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Might",
  tier1Effect: "2 + M holy damage; P < weak, slowed (save ends)",
  tier2Effect: "5 + M holy damage; P < average, slowed (save ends)",
  tier3Effect: "7 + M holy damage; P < strong, slowed (save ends)"
});
