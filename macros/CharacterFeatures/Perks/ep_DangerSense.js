//@id=JlmDwPWszdKZqi79
//@name=Danger Sense
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Danger Sense",
  description: "Whenever you are in a natural environment (but not in a settlement in that environment), you gain an edge on tests made using the Alertness skill, and you can’t be surprised. Additionally, you have a connection to nature that warns you if any natural disaster is imminent within the next 72 hours, though you don’t know exactly what it will entail (an earthquake, a wildfire, and so forth).",
  source: "Perk"
});
