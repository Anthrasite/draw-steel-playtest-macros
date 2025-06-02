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
      <li>Once at the start of your turn as a free maneuver, you and each ally in the area can spend any number of Recoveries. Once as a free maneuver at the start of your turn, you allow yourself and each ally in the area to spend any number of Recoveries.</li>
      <li>The area is difficult terrain for enemies.</li>
      <li>Each enemy who enters the area for the first time in a combat round or starts their turn there takes damage equal to your Reason score.</li>
    </ul>`,
  persistentCost: 1,
  persistentEffect: "The area remains until the start of your next turn. As a maneuver, you can move the area up to 5 squares. This ability ends if the area is ever not within your line of effect."
});
