//@id=dUs9Naf87kHD5blW
//@name=Pardon My Friend
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Pardon My Friend",
  description: `When an ally within 5 squares fails a Presence test, you can step in and make a Presence test that takes a bane, with your roll replacing the ally’s roll. This perk can be used only once per test, even if more than one character has it.`,
  source: "Perk"
});
