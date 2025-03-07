try {
  // Show the quick modifier dialog
  let modButtons = {
    negOne: { label: `-1`, callback: () => -1, color: `#8B0000` },
    zero: { label: `+0`, callback: () => 0, color: `#000000` },
    one: { label: `+1`, callback: () => 1, color: `#003300` },
    two: { label: `+2`, callback: () => 2, color: `#004D00` },
    three: { label: `+3`, callback: () => 3, color: `#006400` },
    four: { label: `+4`, callback: () => 4, color: `#008000` },
    custom: { label: `Other`, callback: () => `custom`, color: `#808080` }
  };

  const modButtonStyles = `
    <style>
      button.negOne {
        color: ${modButtons.negOne.color};
      }
      button.zero {
        color: ${modButtons.zero.color};
      }
      button.one {
        color: ${modButtons.one.color};
      }
      button.two {
        color: ${modButtons.two.color};
      }
      button.three {
        color: ${modButtons.three.color};
      }
      button.four {
        color: ${modButtons.four.color};
      }
      button.custom {
        color: ${modButtons.custom.color};
      }
    </style>`

  let modifier = await Dialog.wait({
    title: `Modifier`,
    buttons: modButtons,
    content: modButtonStyles
  });

  // Show the custom modifier dialog (if neccessary)
  if (modifier === `custom`)
    modifier = await game.macros.getName(`ShowSimpleInputDialog`).execute({ label: `Modifier` });
  if (modifier === ``)
    modifier = 0;

  // Show the edges and banes dialog
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

  if(roll.dice[0].total + roll.dice[1].total === 20) // Always get a tier 3 result on roll of 20
     tier = 3;

  // Display the roll
  let flavorColor = tier === 1 ? `#800000`
    : tier === 2 ? `#000000`
    : `#008000`;
  await roll.toMessage({
    speaker: ChatMessage.implementation.getSpeaker({actor: actor}),
    flavor: `<span style="color: ${flavorColor}; font-weight: bold;">${isCrit ? `Critical success! ` : ``}Tier ${tier} </span>[${getEdgeBaneLabel(edgeBane)}]`
  });

  return { tier: tier, edge: edgeBane };
}
catch (error) {
  if (error.message !== "The Dialog was closed without a choice being made.")
    ui.notifications.error(error);
  throw error;
}