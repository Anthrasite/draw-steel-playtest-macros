const label = await game.macros.getName(`ValidateParameter`).execute({ name: `label`, value: scope.label, type: `string` });
const title = (await game.macros.getName(`ValidateParameter`).execute({ name: `label`, value: scope.label, type: `string`, nullable: true })) ?? label;
const allowNegative = (await game.macros.getName(`ValidateParameter`).execute({ name: `allowNegative`, value: scope.allowNegative, type: `boolean`, nullable: true })) ?? true;
const defaultValue = (await game.macros.getName(`ValidateParameter`).execute({ name: `defaultValue`, value: scope.defaultValue, type: `number`, nullable: true })) ?? 0;

return await Dialog.prompt({
  title: title,
  content: `
    <form>
      <div class="form-group">
        <label>${label}:</label>
        <div class="form-fields">
          <input type="number" onkeypress="return ((event.key >= '0' && event.key <= '9')${allowNegative ? ` || event.key === '-'` : ``})" value="${defaultValue}" autofocus onFocus="this.select()"/>
        </div>
      </div>
    </form>`,
  callback: html => html.find('input').val()
});