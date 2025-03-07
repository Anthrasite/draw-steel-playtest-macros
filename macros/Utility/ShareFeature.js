//@id=aUX7yxzO8WBIhCKP
//@name=ShareFeature
//@img=icons/svg/dice-target.svg
try {
  await game.dsmacros.executeMacroFromCompendium("ValidateActorAttributes", );

  const name = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `name`, value: scope.name, type: `string` });
  const description = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `description`, value: scope.description, type: `string` });
  const source = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `source`, value: scope.source, type: `string` });

  const onUseFunc = await game.dsmacros.executeMacroFromCompendium(`ValidateParameter`, { name: `onUseFunc`, value: scope.onUseFunc, type: `function`, nullable: true });

  // Calculate values for showing the "Use" button
  const buttonId = await game.dsmacros.executeMacroFromCompendium(`GetUUID`);

  // Show the ability in the chat
  await ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker(),
    flags: { "core.canPopout": true },
    content: 
      `<h2 style="border-color: black; border-width: 2px;">${name} <span style="font-size: 80%; color: gray;"> [${source}]</span></h2>
      <p>${description}${description.includes(`</p>`) ? `` : `</p>`}
      ${(onUseFunc ? `<button id="${buttonId}">Use</button>` : ``)}`
  });

  // Register event for the "Use" button
  if (onUseFunc) {
    $(document).on(`click`, `#${buttonId}`, async function() {
      await onUseFunc();
    });
  }
}
catch (error) {
  ui.notifications.error(error);
}
