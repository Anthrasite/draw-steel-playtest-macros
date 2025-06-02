//@id=7w3VXPBlEJtKznjT
//@name=Teamwork Has Its Place
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Teamwork Has Its Place",
  flavorText: "You attack an enemy as an ally exposes their weakness.",
  keywords: "Melee, Ranged, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1 or ranged 5",
  target: "One creature or object",
  powerRollStat: "Agility",
  tier1Effect: "3 + A damage",
  tier2Effect: "6 + A damage",
  tier3Effect: "9 + A damage",
  effect: "If any ally is adjacent to the target, you gain 1 surge before making the power roll.",
  beforeRollFunc: async function() {
    const allyAdjacent = await Dialog.confirm({
      title: `Ally adjacent?`,
      content: `<p>Is there an ally adjacent to the target?</p>`,
      defaultYes: false
    });

    if (allyAdjacent)
      await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});
