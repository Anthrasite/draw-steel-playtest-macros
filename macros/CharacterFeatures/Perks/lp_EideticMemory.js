//@id=TeirMJlRwYazcVmB
//@name=Eidetic Memory
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Eidetic Memory",
  description: `Your mind is an encyclopedia, though not always an easy one to organize. After finishing a respite, choose one skill from the lore skill you don’t have. You gain that skill until you finish a respite. Additionally, if you spend at least 1 minute reading a page of text, you can memorize its contents. You can memorize entire books this way.`,
  source: "Perk"
});
