await game.macros.getName(`FreeStrikeMelee`).execute({
  onSurgeFunc: async function() {
    return await game.macros.getName(`Shadow_OnSurge`).execute();
  }
});