import { executeMacroFromCompendium } from "./helper.mjs";

Hooks.once(`init`, function () {
    console.log(`Initializing Draw Steel Playtest Macros`);

    game.dsmacros = {
        executeMacroFromCompendium
    }
});
