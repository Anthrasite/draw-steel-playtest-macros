//@id=YwpDuNX84dehER5K
//@name=Meteoric Introduction
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Meteoric Introduction",
  flavorText: "You give your enemy a gentle tap—like an asteroid impact.",
  type: "Main Action",
  keywords: "Earth, Magic, Melee, Strike",
  distance: "Melee 1",
  target: "One creature or object",
  powerRollStat: "Reason",
  tier1Effect: "3 + R damage; push 2",
  tier2Effect: "5 + R damage; push 3",
  tier3Effect: "8 + R damage; push 4"
});

