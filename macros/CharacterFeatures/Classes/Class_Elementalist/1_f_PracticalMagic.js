//@id=0VDzS9IiKp1kGYlw
//@name=Practical Magic
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Practical Magic",
  flavorText: "Your mastery of elemental power lets you customize your conjurations.",
  keywords: "Magic",
  type: "Maneuver",
  distance: "Self; see below",
  target: "Self",
  effect: `Choose one of the following effects:</p>
    <ul>
      <li>You use the Knockback maneuver, but its distance becomes the range of your Hurl Element ability, and you use Reason instead of Might for the power roll.</li>
      <li>You choose a creature within the distance of your Hurl Element ability and one of the following damage types: acid, cold, corruption, fire, lightning, poison, or sonic. That creature takes damage of the chosen type equal to your Reason score.</li>
      <li>You teleport up to a number of squares equal to your Reason score. If you choose this option, you can spend essence to teleport 1 additional square for each essence spent.</li>
    </ul>`
});
