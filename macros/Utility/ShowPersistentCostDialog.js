//@id=96WYstdKircGE5Th
//@name=ShowPersistentCostDialog
//@img=icons/svg/dice-target.svg
const label = await game.macros.getName(`ValidateParameter`).execute({ name: `label`, value: scope.label, type: `string` });
const resourceLabel = await game.macros.getName(`ValidateParameter`).execute({ name: `resourceLabel`, value: scope.resourceLabel, type: `string` });
const selectByDefault = (await game.macros.getName(`ValidateParameter`).execute({ name: `selectByDefault`, value: scope.selectByDefault, type: `boolean`, nullable: true })) ?? false;

const persistentCosts = await game.macros.getName(`GetPersistentCost`).execute();
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
