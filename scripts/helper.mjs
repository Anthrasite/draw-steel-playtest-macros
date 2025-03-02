export async function executeMacroFromCompendium(macroName, options={}) {
  const utilityMacroCompendium = game.packs.get("draw-steel-playtest-macros.Utility");
  const macroId = utilityMacroCompendium.index.find(m => m.name === macroName)._id;
  const macro = await utilityMacroCompendium.getDocument(macroId);
  return await macro.execute(options);
}
