//@id=OYmTpd2t639jSXhl
//@name=Getting Too Old for This
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Getting Too Old for This",
  description: `You were once a renowned hero, but you’ve been living the last few years in blissful peace. Now you’re coming out of retirement for one last hurrah. Your fighting skills might have atrophied to the point where you’re no stronger than a wet-behind-the-ears novice adventurer, but you still remember some of your old tricks.</p>
    <p><b>Benefit:</b> On your turn, you can choose a heroic ability that you would be able to learn if you were one level higher. Provided you meet the ability’s other prerequisites and can spend any required Heroic Resources, you can use the ability. Once you use this benefit, you can’t do so again until you earn 2 Victories.</p>
    <p><b>Drawback:</b> While you are winded, you take a −2 penalty to speed.</p>`,
  source: "Complication"
});
