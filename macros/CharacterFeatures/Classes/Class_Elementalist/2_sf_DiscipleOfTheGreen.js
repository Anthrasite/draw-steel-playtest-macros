//@id=TxhsuZWYVz6jRFe3
//@name=Disciple of the Green
//@img=icons/magic/nature/beam-hand-leaves-green.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Disciple of the Green",
  description: `You can use a maneuver to shapeshift into a type of creature on the Green Animal Forms table. While in animal form, you can speak, and you use your Reason score to make melee free strikes. Your statistics stay the same except as noted on the table.</p>
    <p>Each form has a prerequisite level that you must attain in this class before you can adopt it. Some animal forms grant you temporary Stamina. You lose this temporary Stamina when you revert back to your true form.</p>
    <p>You choose a specific animal and appearance while in animal form. For example, if you become a rodent, you might become a mouse, a rat, a shrew, or any other size 1T animal who fits the rodent type. When you take on an animal form, your equipment either melds into your new form or falls undamaged to the ground (your choice). When you return to your true form, any melded gear reappears on your person.</p>
    <p>You can revert back to your true form as a maneuver. You can’t enter an animal form unless you are in your true form. When you are dying, you revert to your true form and can’t turn back into an animal until you are no longer dying.</p>`,
  source: "Class"
});
