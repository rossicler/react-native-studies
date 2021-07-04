export const statNameParser = (statName) => {
  const nameDict = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "STAK",
    "special-defense": "SDEF",
    speed: "SPD",
  };
  return nameDict[statName.toLowerCase()];
};

export const fillZeros = (numZeros, numToFill) => {
  let zeros = "";
  for (let i = 0; i < numZeros - numToFill.toString().length; i++) {
    zeros += "0";
  }
  return zeros + numToFill;
};
