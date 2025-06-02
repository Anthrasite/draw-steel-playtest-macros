//@id=NtxO79Ig5uMWCeVU
//@name=I'm No Threat
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "I'm No Threat",
  flavorText: "Taking on an illusory countenance gives you an advantage on subterfuge.",
  keywords: "Magic",
  type: "Maneuver",
  distance: "Self",
  target: "Self",
  effect: `You envelop yourself in an illusion that makes you appear nonthreatening and harmless to your enemies. You might take on the appearance of a harmless animal of your size, such as a sheep or capybara, or you might appear as a less heroic and unarmed version of yourself. While this illusion lasts, your strikes gain an edge, and when you take the Disengage move action, you gain a +1 bonus to the distance you can shift.</p>
    <p>The illusion ends when you harm another creature, when you physically interact with a creature, when you use this ability again, or when you end the illusion (no action required). If you end this illusion by harming another creature, you gain 1 surge.</p>`,
  extraResourceCost: "1",
  extraResourceEffect: "Choose a creature whose size is no more than 1 greater than yours and who is within 10 squares. This ability’s illusion makes you appear as that creature. This illusion covers your entire body, including clothing and armor, and alters your voice to sound like that of the creature. You gain an edge on tests made to convince the creature’s allies that you are the creature.",
  beforeRollFunc: async function() {
    await game.macros.getName("UpdateAttribute").execute({ activeActor: actor, attributeName: "surges", value: 1, isDelta: true });
  }
});
