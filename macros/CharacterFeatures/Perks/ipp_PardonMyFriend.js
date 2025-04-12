//@id=dUs9Naf87kHD5blW
//@name=Pardon My Friend
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Pardon My Friend",
  description: `When an ally within 5 squares of you fails a Presence test, you can step in and make a Presence test with a bane. Your new roll replaces their roll. This feature can only be used once per test, regardless of how many heroes have it.`,
  source: "Perk"
});
