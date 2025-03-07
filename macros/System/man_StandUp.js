//@id=Qa3uGBZ2JSNgC7he
//@name=Stand Up
//@img=icons/magic/air/air-smoke-casting.webp
await game.macros.getName("ShareAbility").execute({
  activeActor: actor,
  name: "Stand Up",
  type: "Maneuver",
  description: `You can use this maneuver to stand up if you are prone, ending that condition. Alternatively, you can use this maneuver to make an adjacent prone creature stand up.`
});
