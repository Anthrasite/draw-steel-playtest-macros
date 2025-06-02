//@id=wRAKbtBqkEW6JgM0
//@name=Runic Carving
//@img=icons/magic/earth/strike-fist-stone.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Runic Carving",
  description: `You can carve a rune onto your skin with 10 uninterrupted minutes of work, which is activated by the magic within your body. The rune you carve determines the benefit you receive, chosen from among the following:</p>
    <ul>
      <li><b>Detection:</b> Pick a specific type of creature (such as goblins or humans) or object (such as gems or potions). Your rune glows softly when you are within 20 squares of any creature or object of that type, even if you don’t have line of effect to the creature or object. You can change the type of creature or object as a maneuver.</li>
      <li><b>Light:</b> Your skin sheds light for 10 squares. You can turn this light on and off as a maneuver.</li>
      <li><b>Voice:</b> As a maneuver, you can communicate telepathically with a willing creature you have met before and who is within 1 mile of you. You must know the creature’s name, and they must speak and understand a language you know. You and the creature can respond to one another as if having a spoken conversation. You can communicate with a different creature by changing the rune.</li>
    </ul>
    <p>You can have one rune active at a time, and can change or remove a rune with 10 uninterrupted minutes of work.</p>`,
  source: "Ancestry"
});
