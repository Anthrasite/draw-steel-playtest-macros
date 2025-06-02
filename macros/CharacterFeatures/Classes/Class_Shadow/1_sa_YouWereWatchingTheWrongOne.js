//@id=JoeCQ93ILVAuvTt8
//@name=You Were Watching the Wrong One
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "You Were Watching the Wrong One",
  flavorText: "They can’t watch both of you at once.",
  keywords: "Melee, Strike, Weapon",
  type: "Main Action",
  distance: "Melee 1",
  target: "One creature",
  powerRollStat: "Agility",
  tier1Effect: "3 + A damage",
  tier2Effect: "5 + A damage",
  tier3Effect: "8 + A damage",
  effect: "As long as you have one or more allies within 5 squares of the target, you gain 1 surge. If you are flanking the target when you use this ability, choose one ally who is flanking with you. That ally also gains 1 surge.",
  beforeRollFunc: async function() {
    const allyAdjacent = await Dialog.confirm({
      title: `Ally nearby?`,
      content: `<p>Is there an ally with 5 squares of the target?</p>`,
      defaultYes: false
    });

    if (allyAdjacent)
      await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});
