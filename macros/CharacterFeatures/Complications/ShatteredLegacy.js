//@id=fVF5ICsRveDji8LX
//@name=Shattered Legacy
//@img=icons/magic/control/debuff-chains-shackles-movement-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Shattered Legacy",
  description: `You’re the heir to a powerful supernatural treasure that has been in your family for generations. One problem, though: that treasure is broken. Some ancestor of yours sundered it while saving the world. Or maybe they tripped and smashed it on a rock. Either way, it’s your job to fix it.</p>
    <p><b>Benefit:</b> You know one language of your choice. Additionally, you have one leveled treasure of your choice.</p>
    <p><b>Drawback:</b> The chosen leveled treasure is broken and completely inoperative. Repairing the treasure requires that you complete the Craft Treasure project for it. The project goal is half of what it would cost to create such an item, and you already have the project source you need. You must seek out any item prerequisite.</p>`,
  source: "Complication"
});
