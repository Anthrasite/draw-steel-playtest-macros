//@id=DGuW0MhfV2wPzaYo
//@name=Thingspeaker
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Thingspeaker",
  description: `When you hold an object in your hand for 1 uninterrupted minute, you sense whether it bears emotional resonance. Objects with emotional resonance could include treasured gifts, murder weapons, or personal keepsakes. If the Director determines that the object bears emotional resonance, you learn the most dominant emotion associated with the object, then receive a vision that answers one of the following questions:</p>
    <ul>
      <li>What was the name of the person whose emotion is imprinted on this object?</li>
      <li>Why does this emotion linger on the object?</li>
      <li>How long has it been since the object was held by the person whose emotion lingers on it?</li>
    </ul>
    <p>After asking one question, you can choose to delve deeper by asking one additional question from the list, but you are then overcome with emotions that do not belong to you. You take a bane on Intuition and Presence tests until you finish a respite, and you can’t use this perk again while you suffer this bane.</p>`,
  source: "Perk"
});
