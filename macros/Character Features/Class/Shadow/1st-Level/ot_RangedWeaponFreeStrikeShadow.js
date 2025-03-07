await game.macros.getName(`FreeStrikeRanged`).execute({
  onSurgeFunc: async function(damageSurges, potencySurges) {
    if (damageSurges > 0)
      return await game.macros.getName(`Shadow_OnSurge`).execute();
  }
});