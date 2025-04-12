//@id=noKbIuR1UGQ6dHfg
//@name=Familiar
//@img=icons/magic/light/hand-sparks-glow-yellow.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Familiar",
  description: `A magic spirit, which has taken the form of a specific small animal or animate object, has chosen to be your familiar— or to adopt you as its familiar. The familiar can’t perform activities that require hands, and it can’t harm other creatures or objects. It can provide flanking benefits only to you. The familiar uses the familiar stat block.</p>
    <p>If the familiar is destroyed, you can restore them as a respite activity or by spending a Recovery as an action to bring them back into existence into an unoccupied space adjacent to you.</p>`,
  source: "Perk"
});
