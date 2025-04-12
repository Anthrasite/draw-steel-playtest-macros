//@id=dgCZhGLEt1zuOfbx
//@name=Ritualist
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Ritualist",
  description: `You can spend 1 minute performing a magic ritual of blessing. At the end of the ritual, touch one willing creature, including yourself. The creature gains a double edge on the next test they make within the next minute. A creature can’t use this benefit on an activity that takes longer than a minute.`,
  source: "Perk"
});
