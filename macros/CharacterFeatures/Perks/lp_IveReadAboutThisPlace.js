//@id=WedxhNOzVBwAHc5P
//@name=I've Read About This Place
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "I've Read About This Place",
  description: `When you enter a settlement you’ve never been to before, you can ask the Director one of the following questions:</p>
    <ul>
      <li>Who’s the most influential public figure in this settlement?</li>
      <li>Who in this town would be friendly to us right now?</li>
      <li>What does this settlement need most from outsiders?</li>
    </ul>
    <p>If the Director does not have an answer to the question you ask, you can instead ask a different question.</p>`,
  source: "Perk"
});
