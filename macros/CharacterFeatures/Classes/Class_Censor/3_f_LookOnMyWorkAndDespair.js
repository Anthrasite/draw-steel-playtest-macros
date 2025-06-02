//@id=oMCbsfeN8HEzuyc5
//@name=Look on my Work and Despair
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Look on my Work and Despair",
  description: "Your judgment has grown in divine power, instilling fear in those you condemn. Whenever you use your Judgment ability, you can spend 1 wrath, and if the target has P < average, they are frightened of you (save ends). Additionally, whenever a creature judged by you is reduced to 0 Stamina and you use Judgment as a free triggered action, if the new target has P < strong, they are frightened of you (save ends). If the target is already frightened of you, they instead take damage equal to twice your Presence score.",
  source: "Class"
});
