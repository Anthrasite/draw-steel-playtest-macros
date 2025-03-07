const roll = await game.macros.getName(`ValidateParameter`).execute({ name: `roll`, value: scope.roll, type: `object` });
const flavor = await game.macros.getName(`ValidateParameter`).execute({ name: `flavor`, value: scope.flavor, type: `string` });

const message = await roll.toMessage({
  speaker: ChatMessage.implementation.getSpeaker({actor}),
  flavor
});
if (game.dice3d && roll.dice.length > 0)
  await game.dice3d.waitFor3DAnimationByMessageID(message.id);
