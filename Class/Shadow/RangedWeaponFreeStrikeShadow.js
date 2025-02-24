await game.macros.getName(`Ranged Weapon Free Strike`).execute({
  onSurgeFunc: async function() {
    return await game.macros.getName(`OnSurgeShadow`).execute();
  }
});