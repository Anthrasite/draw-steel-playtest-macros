//@id=XqQvyC2sRnEprdmY
//@name=Shadow_OnSurge
//@img=icons/svg/dice-target.svg
const firstSurge = await Dialog.confirm({
  title: `First surge?`,
  content: `<p>Is this the first surge used this round?</p>`,
  defaultYes: false
});
if (firstSurge)
  await game.dsmacros.executeMacroFromCompendium(`UpdateAttribute`, { attributeName: `resource`, value: 1, isDelta: true });
