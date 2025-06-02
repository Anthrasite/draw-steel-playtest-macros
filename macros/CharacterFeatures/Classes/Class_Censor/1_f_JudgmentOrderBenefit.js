//@id=iXd4yl8HCKpLoMuj
//@name=Judgment Order Benefit
//@img=icons/magic/holy/barrier-shield-winged-blue.webp
await game.macros.getName("ShareFeature").execute({
  activeActor: actor,
  name: "Judgment Order Benefit",
  description: `The first time on a turn that you use your Judgment ability to judge a creature, you gain the following benefit based on your order:</p>
    <ul>
      <li><b>Exorcist:</b> You can teleport up to a number of squares equal to twice your Presence score. This movement must take you closer to the judged creature. You do not need line of effect to your destination.</li>
      <li><b>Oracle:</b> You can deal holy damage equal to twice your Presence score to the judged creature.</li>
      <li><b>Paragon:</b> You can vertical pull the judged creature up to a number of squares equal to twice your Presence score.</li>
    </ul>`,
  source: "Class"
});
