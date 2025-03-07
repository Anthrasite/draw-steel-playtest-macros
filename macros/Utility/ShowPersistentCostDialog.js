//@id=96WYstdKircGE5Th
//@name=ShowPersistentCostDialog
//@img=icons/svg/dice-target.svg
const label = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `label`, value: scope.label, type: `string` });
const resourceLabel = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `resourceLabel`, value: scope.resourceLabel, type: `string` });
const selectByDefault = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `selectByDefault`, value: scope.selectByDefault, type: `boolean`, nullable: true })) ?? false;

const persistentCosts = await game.dsmacros.executeMacroFromCompendium(`GetPersistentCost`);
if (!Object.keys(persistentCosts).length)
  return undefined;

let persistCostOptions = ``;
let counter = 0;
for (const [abilityName, cost] of Object.entries(persistentCosts))
  persistCostOptions += `
    <div>
      <input id="persistentCost${counter++}" type="checkbox" style="vertical-align: middle;" name="persistentCosts" value="${abilityName}"${selectByDefault ? ` checked` : ``}/>
      <label style="vertical-align: middle;" for="persistentCost${counter}">${abilityName} <i>(${cost} ${resourceLabel})</i></label>
    </div>`;

return await Dialog.prompt({
  title: `Persistent cost`,
  content: `
    <form>
      <div class="form-group">
        <fieldset>
          <legend>${label}:</legend>
          ${persistCostOptions}
        </fieldset>
      </div>
    </form>`,
  callback: html => html.find('input[name="persistentCosts"]:checked').get().map(i => i.value)
});
