//@id=5vzNHBpcWZqsui63
//@name=Arcane Trick
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Arcane Trick",
  flavorText: "You cast an entertaining spell that creates a minor but impressive magical effect.",
  keywords: "Magic",
  type: "Action",
  distance: "Self; see below",
  target: "Self",
  effect: `Choose one of the following effects:</p>
    <ul>
      <li>You teleport a size 1S or smaller object adjacent to you into an unoccupied space adjacent to you.</li>
      <li>Until the start of your next turn, a part of your body shoots a shower of harmless noisy sparks that light up each square adjacent to you.</li>
      <li>You ignite or snuff out (your choice) every mundane light source adjacent to you.</li>
      <li>You transform up to 1 pound of edible food you touch to make it taste delicious or disgusting.</li>
      <li>Until the start of your next turn, you make your body exude a particular odor you’ve smelled before. This smell can be sensed by each creature within 5 squares of you, but can’t impose any condition or other drawback on those creatures.</li>
      <li>You place a small magical inscription on the surface of a mundane object you touch, or you can remove an inscription that was made by you or by another creature using Arcane Trick.</li>
      <li>You touch a size 1T object to cover it with an illusion that makes it look like a different object. Any creature who handles the object becomes aware of the illusion. The illusion ends when you stop touching the object.</li>
    </ul>`
});
