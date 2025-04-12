//@id=HA8uExQPqMpjzsTt
//@name=Improvisation Creation
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Improvisation Creation",
  description: `Even without tools, you can quickly jury-rig a mundane item or repair a mundane piece of equipment related to a skill you have from the crafting skill group without needing to make a test. That items works for 1 hour or 1 use (whichever comes first) then breaks beyond repair. For example, if you have the carpentry skill, you can repair a rickety wooden bridge long enough for a group of creatures to cross it or build a simple shovel made of wood that works for 1 hour.`,
  source: "Perk"
});
