//@id=NtxO79Ig5uMWCeVU
//@name=I'm No Threat
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  name: "I'm No Threat",
  flavorText: "Taking on the illusory countenance of another creature gives you an advantage on subterfuge.",
  keywords: "Magic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: `When you use this ability, you cover yourself in an illusion that causes you to appear nonthreatening and harmless to your enemies. You might take on the appearance of a harmless animal of your size, such as a sheep or capybara, or you might appear as a less heroic, unarmed, and capable version of yourself. While this illusion lasts, your strikes made against other creatures gain an edge. If you use this ability in combat, you gain a surge when you use it.</p>
    <p>The illusion ends when you harm another creature, when you and any creature physically interact, when you use this ability again, or when you end the illusion (no action required).</p>`,
  extraResourceCost: "1",
  extraResourceEffect: "Choose a creature whose size is no more than 1 greater than yours, and who is within 10 squares of you. This ability’s illusion makes you appear to be that creature. This illusion covers your entire body, including clothing and armor, and changes your voice to sound like the creature. You gain an edge on tests made to convince the creature’s allies that you are the creature.",
  onUseFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ attributeName: "surges", value: 1, isDelta: true });
  }
});
