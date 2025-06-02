//@id=VBrbLjYNkHGxcUvZ
//@name=Green: Acolyte of the Green
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Green: Acolyte of the Green",
  description: "You harness the residual magic from your green spells to bolster yourself and your allies. Whenever you deal damage to one or more creatures using an ability that has the Green and Magic keywords and that costs essence to use, you or one creature within 10 squares of you gains temporary Stamina equal to your Reason score.",
  source: "Class"
});
