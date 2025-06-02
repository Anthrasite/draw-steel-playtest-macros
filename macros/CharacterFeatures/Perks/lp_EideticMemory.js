//@id=TeirMJlRwYazcVmB
//@name=Eidetic Memory
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Eidetic Memory",
  description: `Your mind is an encyclopedia, though not always an easy one to organize. When you finish a respite, choose one skill from the lore skill group that you don’t have. You have that skill until you finish your next respite. Additionally, if you spend 1 minute or more reading any page of text, you can memorize its contents, allowing you to memorize entire books with sufficient time.`,
  source: "Perk"
});
