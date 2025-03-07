await game.macros.getName(`FreeStrikeRanged`).execute({
  onSurgeFunc: async function() {
    return await game.macros.getName(`Shadow_OnSurge`).execute();
  }
});