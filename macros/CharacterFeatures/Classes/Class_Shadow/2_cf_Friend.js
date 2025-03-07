//@id=hqMSaFH38vOTfNZo
//@name=Friend!
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Friend!",
  description: `Your illusions make your enemies believe you are their friend in critical moments. Whenever an enemy uses an ability or trait that targets multiple allies and you are within distance of the effect, you can choose to be a target of the effect as well.</p>
    <p>Additionally when you use your I’m No Threat ability, you can take the Disengage move action as part of that ability.</p>`,
  source: "Class"
});
