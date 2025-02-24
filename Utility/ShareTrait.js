try {
  await game.macros.getName("ValidateActorAttributes").execute();

  const name = await game.macros.getName(`ValidateParameter`).execute({ name: `name`, value: scope.name, type: `string` });
  const description = await game.macros.getName(`ValidateParameter`).execute({ name: `description`, value: scope.description, type: `string` });
  const source = await game.macros.getName(`ValidateParameter`).execute({ name: `source`, value: scope.source, type: `string` });

  const onUseFunc = await game.macros.getName(`ValidateParameter`).execute({ name: `onUseFunc`, value: scope.onUseFunc, type: `function`, nullable: true });

  // Calculate values for showing the "Use" button
  const buttonId = await game.macros.getName(`GetUUID`).execute();

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