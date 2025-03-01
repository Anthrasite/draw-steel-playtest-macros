try {
  const powerRollStat = await game.macros.getName(`ValidateParameter`).execute({ name: `powerRollStat`, value: scope.powerRollStat, type: `string`, nullable: true });
  const allowedEdgeBane = await game.macros.getName(`ValidateParameter`).execute({ name: `allowedEdgeBane`, value: scope.allowedEdgeBane, type: `object`, nullable: true });

  // Calculate the default modifier based on the highest allowed characteristic of the power roll
  let defaultValue = -1;
  if (powerRollStat) {
    const characteristics = actor.system.attributes.characteristics;
    for (const [charName, char] of Object.entries(characteristics))
      if (powerRollStat.toLowerCase().includes(charName) && char.value > defaultValue)
        defaultValue = char.value;
  }
  else
    defaultValue = 2;

  // Show the modifier dialog
  modifier = await game.macros.getName(`ShowSimpleInputDialog`).execute({ label: `Modifier`, defaultValue });
  if (modifier === ``)
    modifier = 0;

  // Create the buttons and CSS for the edges and banes dialog
  function getEdgeBaneLabel(eb) {
    return eb === `db` ? `Double bane`
      : eb === `b` ? `Bane`
      : eb === `e` ? `Edge`
      : eb === `de` ? `Double edge`
      : `Normal roll`;
  }

  let ebButtons = {
    db: { label: getEdgeBaneLabel(`db`), color: `#8B0000` },
    b: { label: getEdgeBaneLabel(`b`), color: `#4D0000` },
    n: { label: getEdgeBaneLabel(`n`), color: `#000000` },
    e: { label: getEdgeBaneLabel(`e`), color: `#003300` },
    de: { label: getEdgeBaneLabel(`de`), color: `#006400` }
  };

  const ebButtonStyles = `
    <style>
      .dialog-buttons {
        white-space: nowrap;
      }
      button.db {
        color: ${ebButtons.db.color};
      }
      button.b {
        color: ${ebButtons.b.color};
      }
      button.n {
        color: ${ebButtons.n.color};
      }
      button.e {
        color: ${ebButtons.e.color};
      }
      button.de {
        color: ${ebButtons.de.color};
      }
    </style>`

  // Remove any buttons that aren't allowed
  if (allowedEdgeBane)
    for (const ebButtonCode in ebButtons)
      if (!allowedEdgeBane.includes(ebButtonCode))
        delete ebButtons[ebButtonCode];

  // Show the edges and banes dialog
  const edgeBane = await Dialog.wait({
    title: `Edges & Banes`,
    buttons: ebButtons,
    content: ebButtonStyles
  });

  // Perform the roll and calculate the tier
  const plusTier = edgeBane === `de`;
  const minusTier = edgeBane === `db`;
  const edgeBaneModifier = edgeBane === `e` ? `+ 2`
    : edgeBane === `b` ? `- 2`
    : ``;

  const roll = await new Roll(`1d10 + 1d10 ${edgeBaneModifier} + ${modifier}`).evaluate();
  const isCrit = roll.dice[0].total + roll.dice[1].total > 18;

  let tier = roll.total < 12 ? 1
    : roll.total < 17 ? 2
    : 3;
  if (plusTier & tier < 3)
     tier++;
  if (minusTier & tier > 1)
     tier--;

  if (roll.dice[0].total + roll.dice[1].total === 20) // Always get a tier 3 result on roll of 20
     tier = 3;

  // Display the roll
  const flavorColor = tier === 1 ? `#800000`
    : tier === 2 ? `#000000`
    : `#008000`;
  await game.macros.getName(`ShareRoll`).execute({
    roll,
    flavor: `<span style="color: ${flavorColor}; font-weight: bold;">${isCrit ? `Critical success! ` : ``}Tier ${tier} </span>[${getEdgeBaneLabel(edgeBane)}]`
  });

  return { tier: tier, edge: edgeBane };
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
  else
    throw error;
}