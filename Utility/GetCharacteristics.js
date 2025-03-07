const charGroupName = `characteristics`;

if (!actor)
  throw `Error: No token is selected`;
else if (!Object.hasOwn(actor.system.attributes, charGroupName))
  throw `Error: Attribute group "${charGroupName}" doesn't exist for ${actor.name}`;
else {
  function getChar(charName) {
    if (!Object.hasOwn(actor.system.attributes[charGroupName], charName))
      throw `Error: Attribute "${charName}" doesn't exist in attribute group "${charGroupName}" for ${actor.name}`;
    else
      return actor.system.attributes[charGroupName][charName].value;
  }

  return {
    might: getChar(`might`),
    agility: getChar(`agility`),
    reason: getChar(`reason`),
    intuition: getChar(`intuition`),
    presence: getChar(`presence`)
  };
}