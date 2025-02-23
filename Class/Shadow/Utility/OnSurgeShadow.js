const firstSurge = await Dialog.confirm({
  title: `First surge?`,
  content: `<p>Is this the first surge used this round?</p>`
});
if (firstSurge) {
  await game.macros.getName(`UpdateAttribute`).execute({
    attributeName: `resource`,
    value: 1,
    add: true
  });
}