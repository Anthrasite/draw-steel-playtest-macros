//@id=Y4dNSyhQzDX2iCUR
//@name=Ranged Weapon Free Strike
//@img=icons/weapons/bows/shortbow-recurve.webp
await game.dsmacros.executeMacroFromCompendium(`FreeStrikeRanged`, {
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.dsmacros.executeMacroFromCompendium(`Shadow_OnSurge`);
  }
});
