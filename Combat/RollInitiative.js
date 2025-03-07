const roll = await new Roll(`1d10`).evaluate();
const heroesActFirst = roll.total >= 6;
await game.macros.getName(`SendRollToChat`).execute({
  roll,
  flavor: `<span style="color: ${heroesActFirst ? `#008000` : `#800000`};">${heroesActFirst ? `Heroes` : `Foes`} strike first!</span>`
});