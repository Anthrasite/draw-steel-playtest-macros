//@id=sEy5R2OakUgCQWX8
//@name=Charge
//@img=icons/skills/melee/strike-polearm-light-orange.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Charge",
  type: "Main Action",
  description: `When you take the <i>Charge</i> action, you move up to your speed in a straight line without shifting, and can then make a melee free strike against a creature when you end your move. You can’t move through difficult terrain as part of your movement with this action. You can’t climb, fly, or swim as part of this action unless you have that type of movement as a keyword in your speed.`
});
