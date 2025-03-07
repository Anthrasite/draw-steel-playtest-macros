//@id=YwpDuNX84dehER5K
//@name=A Meteoric Introduction
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "A Meteoric Introduction",
  flavorText: "You give your enemy a gentle tap like an asteroid impact.",
  type: "Action",
  keywords: "Attack, Earth, Magic, Melee, Strike",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "3 + R damage; push 2",
  tier2Effect: "5 + R damage; push 3",
  tier3Effect: "8 + R damage; push 4"
});
      
