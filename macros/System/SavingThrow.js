//@id=E32cunCGS1mQ5XpH
//@name=Saving throw
//@img=icons/magic/control/debuff-chains-shackles-movement-purple.webp
const roll = await new Roll(`1d10`).evaluate();
const effectEnds = roll.total >= 6;
await game.macros.getName(`ShareRoll`).execute({
  activeActor: actor,
  roll,
  flavor: `<span style="color: ${effectEnds ? `#008000` : `#800000`};">Effect ${effectEnds ? `ends!` : `continues...`}</span>`
});
