//@id=KX5ScIyefUh9naNT
//@name=Insight
//@img=icons/magic/unholy/silhouette-robe-evil-power.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Insight",
  description: `By observing your enemy, you learn how to use their weaknesses against them, building up a Heroic Resource called insight.</p>
  <h3>Insight in Combat</h3>
  <p>At the start of a combat encounter or some other stressful situation tracked in combat rounds (as determined by the Director), you gain insight equal to your Victories. At the start of each of your turns during combat, you gain 1d3 insight.</p>
  <p>Additionally, the first time each combat round that you deal damage incorporating 1 or more surges, you gain 1 insight.</p>
  <p>Whenever you use a heroic ability that makes use of a power roll, that ability costs 1 fewer insight if you have an edge or double edge on it. If the ability has multiple targets, the cost is reduced even if the ability gains an edge or has a double edge against only one target.</p>
  <p>You lose any remaining insight at the end of the encounter.</p>
  <h3>Insight Outside of Combat</h3>
  <p>Although you can’t gain insight outside of combat, you can use your heroic abilities and effects that cost insight without spending it. Whenever you use an ability or effect outside of combat that costs insight, you can’t use that same ability or effect outside of combat again until you earn 1 or more Victories or finish a respite.</p>
  <p>When you use an ability outside of combat that lets you spend unlimited insight on its effect, such as Black Ash Teleport, you can use it as if you had spent an amount of insight equal to your Victories.</p>`,
  source: "Class"
});
