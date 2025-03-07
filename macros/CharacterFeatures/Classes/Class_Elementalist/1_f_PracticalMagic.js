//@id=0VDzS9IiKp1kGYlw
//@name=Practical Magic
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  name: "Practical Magic",
  flavorText: "Your mastery of elemental power lets you customize your conjurations.",
  keywords: "Magic, Ranged",
  type: "Maneuver",
  distance: "Self; see below",
  target: "Self",
  effect: `Choose one of the following effects:</p>
    <ul>
      <li>You use the <i>Knockback</i> maneuver, but its distance becomes the range of your <i>Hurl Element</i> ability, and you use Reason instead of Might for the power roll.</li>
      <li>You choose a creature within the distance of your <i>Hurl Element</i> ability and deal damage equal to your Reason score to them. The damage type can be acid, cold, corruption, fire, lightning, poison, or sonic.</li>
      <li>You teleport up to a number of squares equal to your Reason score.</li>
    </ul>`
});
