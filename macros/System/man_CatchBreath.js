//@id=ZxNWv3FI1zJXPM7Q
//@name=Catch Breath
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Catch Breath",
  type: "Maneuver",
  description: `By using the <i>Catch Breath</i> maneuver, you spend a Recovery and regain Stamina in an amount equal to your recovery value.</p>
    <p>If you are dying, you can’t take the <i>Catch Breath</i> maneuver, but other creatures can help you spend recoveries.</p>`
});
