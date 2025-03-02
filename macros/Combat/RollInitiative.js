//@id=hi1QF7EwgHD3eLVn
//@name=Roll initiative
//@img=icons/skills/movement/figure-running-gray.webp
const roll = await new Roll(`1d10`).evaluate();
const heroesActFirst = roll.total >= 6;
await game.dsmacros.executeMacroFromCompendium(`ShareRoll`, {
  roll,
  flavor: `<span style="color: ${heroesActFirst ? `#008000` : `#800000`};">${heroesActFirst ? `Heroes` : `Foes`} strike first!</span>`
});
