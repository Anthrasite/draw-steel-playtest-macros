//@id=5vzNHBpcWZqsui63
//@name=Arcane Trick
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Arcane Trick",
  flavorText: "You cast an entertaining spell that creates a minor but impressive magical effect.",
  keywords: "Magic",
  type: "Action",
  distance: "Self",
  target: "Self",
  effect: `Choose one of the following effects:</p>
    <ul>
      <li>You teleport an unattended size 1T or 1S object within 1 square of you to an unoccupied space within 1 square of you.</li>
      <li>Until the start of your next turn, a part of your body shoots a shower of harmless noisy sparks that give off light within 1 square of you.</li>
      <li>You ignite or snuff out (your choice) every mundane light source within 1 square of you.</li>
      <li>You make up to 1 pound of edible food you can touch taste delicious or disgusting.</li>
      <li>Until the start of your next turn, you make your body exude a particular odor you’ve smelled before. This smell can be sensed by creatures within 5 squares of you, but can’t impose any condition or other drawback on creatures.</li>
      <li>You place a small magical inscription on the surface of a mundane object you can touch, or remove an inscription that was made by you or by another creature using Arcane Trick.</li>
      <li>You cover a size 1T object that you touch with an illusion that makes it look like another object. A creature who handles the object can see through the illusion. The illusion ends when you stop touching the object.</li>
    </ul>`
});
