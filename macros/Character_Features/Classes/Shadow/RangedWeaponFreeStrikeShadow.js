//@id=Y4dNSyhQzDX2iCUR
//@name=Ranged Weapon Free Strike
//@img=icons/weapons/bows/shortbow-recurve.webp
await game.dsmacros.executeMacroFromCompendium(`FreeStrikeRanged`, {
  onSurgeFunc: async function(damageSurges, potencySurges) {
    return await game.dsmacros.executeMacroFromCompendium(`Shadow_OnSurge`, { damageSurges });
  }
});
