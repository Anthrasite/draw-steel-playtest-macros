//@id=DGuW0MhfV2wPzaYo
//@name=Thingspeaker
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Thingspeaker",
  description: `When you hold an object in your hand, you can ask the Director if it bears emotional importance. Objects with emotional resonance could include treasured gifts, murder weapons, or personal keepsakes. If the answer is yes, the Director tells you the most dominant emotion associated with the object, and you can spend 1 uninterrupted minute focusing on the object, at the end of which you receive a vision which answers one of the following questions:</p>
    <ul>
      <li>What was the name of the person whose emotions are imprinted on this object?</li>
      <li>Why does this emotion linger on the object?</li>
      <li>How long has it been since this was held by the person whose emotions linger on it?</li>
    </ul>
    <p>After asking one question, you can choose to delve deeper. You ask one additional question from the list, after which you are overcome with emotions that do not belong to you. You take a bane on Presence and Intuition tests until you finish a respite. While you suffer this bane, you can’t use this feature.</p>`,
  source: "Perk"
});
