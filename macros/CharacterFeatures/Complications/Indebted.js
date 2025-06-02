//@id=zCxGTObr2Sgpvkjc
//@name=Indebted
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Indebted",
  description: `A deal you made went south, or you got involved with the wrong people. Now you owe a debt or a ransom that would bankrupt a minor noble. To pay it off, you’ll need to take some dangerous risks.</p>
    <p><b>Benefit:</b> You’re good with money—because you’ve had to be. Whenever you earn Wealth, you earn 1 more than usual.</p>
    <p><b>Drawback:</b> Your starting Wealth is −5. While your Wealth is lower than 1, you can purchase items as if you had 1 Wealth, but you’re frequently visited by threatening creditors, and shopkeepers often lock their doors when they see you coming.</p>`,
  source: "Complication"
});
