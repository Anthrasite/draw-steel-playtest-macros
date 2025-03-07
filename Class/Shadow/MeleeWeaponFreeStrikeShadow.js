await game.macros.getName(`Melee Weapon Free Strike`).execute({
  onSurgeFunc: async function() {
    return await game.macros.getName(`OnSurgeShadow`).execute();
  }
});