//@id=AQTxaEf8itGUMpOR
//@name=ShowSimpleInputDialog
//@img=icons/svg/dice-target.svg
const label = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `label`, value: scope.label, type: `string` });
const title = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `label`, value: scope.label, type: `string`, nullable: true })) ?? label;
const allowNegative = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `allowNegative`, value: scope.allowNegative, type: `boolean`, nullable: true })) ?? true;
const defaultValue = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `defaultValue`, value: scope.defaultValue, type: `number`, nullable: true })) ?? 0;
const rejectClose = (await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `rejectClose`, value: scope.rejectClose, type: `boolean`, nullable: true })) ?? true;

return await Dialog.prompt({
  title,
  content: `
    <form>
      <div class="form-group">
        <label>${label}:</label>
        <div class="form-fields">
          <input type="number" onkeypress="return ((event.key >= '0' && event.key <= '9')${allowNegative ? ` || event.key === '-'` : ``})" value="${defaultValue}" autofocus onFocus="this.select()"/>
        </div>
      </div>
    </form>`,
  rejectClose,
  callback: html => html.find('input').val()
});
