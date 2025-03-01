//@id=vFuV4QkEyeYHax6T
//@name=Melee Weapon Free Strike
//@img=icons/weapons/swords/shortsword-guard-worn.webp
await game.macros.getName(`FreeStrikeMelee`).execute({
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.macros.getName(`Shadow_OnSurge`).execute();
  }
});
