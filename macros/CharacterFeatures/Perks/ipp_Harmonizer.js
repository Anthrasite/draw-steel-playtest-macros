//@id=10aNcKQXVMuiGtsJ
//@name=Harmonizer
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Harmonizer",
  description: `For you, music is a universal language.</p>
    <ul>
      <li>You can make a Presence test with the music skill to influence creatures even if you don’t share a language.</li>
      <li>Once during a negotiation when an ally makes an argument, you can play music to give them an edge on their test.</li>
    </ul>`,
  source: "Perk"
});
