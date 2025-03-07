//@id=8wU57G0XfgYnocOP
//@name=O Flower Aid, O Earth Defend
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "O Flower Aid, O Earth Defend",
  resourceCost: 5,
  flavorText: "Revitalizing plants and jagged stones grow, helping allies and hindering foes.",
  type: "Maneuver",
  keywords: "Area, Earth, Green, Magic, Ranged",
  distance: "3 cube within 10",
  target: "Special",
  effect: `Until the start of your next turn, the area gains the following effects:</p>
    <ul>
      <li>You and each ally in the area can spend any number of Recoveries at the start of your turn once as a free maneuver.</li>
      <li>The area is difficult terrain for enemies.</li>
      <li>Any enemy who enters the area for the first time in a round or starts their turn there takes damage equal to your Reason score.</li>
    </ul>`,
  persistentCost: 1,
  persistentEffect: "The area remains until the start of your next turn. You can move the area up to 5 squares as a maneuver. This ability ends if you lose line of effect to its area."
});
