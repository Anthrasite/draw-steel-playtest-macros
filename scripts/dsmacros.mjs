import { executeMacroFromCompendium } from "./helper.mjs";

Hooks.once(`init`, function () {
    console.log(`Initializing Draw Steel Playtest Macros`);

    game.dsmacros = {
        executeMacroFromCompendium
    }
});

Hooks.on(`renderSidebarTab`, function (tab) {
  if (tab instanceof CompendiumDirectory)
    updateCompendiumBanner();
});

Hooks.on(`changeSidebarTab`, function (tab) {
  if (tab instanceof CompendiumDirectory)
    updateCompendiumBanner();
});

function updateCompendiumBanner() {
    document.querySelectorAll(`.compendium-sidebar .directory-item.compendium[data-entry-id^="draw-steel-playtest-macros"]`).forEach((pack) => {
        pack.querySelector(`.compendium-banner`).style.display = `none`;

        const packId = pack.getAttribute("data-entry-id").replace("draw-steel-playtest-macros.", "");
        if (packId.startsWith("Character_Features_Ancestries"))
            pack.style.backgroundColor = `rgb(80, 50, 80)`;
        else if (packId.startsWith("Character_Features_Classes"))
            pack.style.backgroundColor = `rgb(50, 50, 80)`;
        else if (packId.startsWith("Character_Features"))
            pack.style.backgroundColor = `rgb(80, 80, 50)`;
        else if (packId === "Combat")
            pack.style.backgroundColor = `rgb(80, 50, 50)`;
        else if (packId === "System")
            pack.style.backgroundColor = `rgb(100, 100, 100)`;
        else
            pack.style.backgroundColor = `rgb(40, 40, 40)`;
    });
}
