//@id=vFuV4QkEyeYHax6T
//@name=Melee Weapon Free Strike
//@img=icons/weapons/swords/shortsword-guard-worn.webp
await game.dsmacros.executeMacroFromCompendium(`FreeStrikeMelee`, {
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.dsmacros.executeMacroFromCompendium(`Shadow_OnSurge`);
  }
});
