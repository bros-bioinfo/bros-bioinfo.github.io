const getSecondaryStructure = (structure) => {
  let carbons = getAlphaCarbons(structure);
  console.log(carbons);
  let chains = splitAtomsIntoChains(carbons);
  console.log(chains);
  let chainA = chains["A"];
  let distMatrix = chainA.reduce();

  return [];
};

const getAlphaCarbons = (structure) => {
  return structure.atoms.filter(atom => atom.name === "CA");
};

const splitAtomsIntoChains = (atomList) => {
  return atomList.reduce((chains, atom) => {
    if (chains[atom.chainID] === undefined) {
      chains[atom.chainID] = [];
    }
    chains[(atom.chainID)].push(atom);
    return chains;
  }, {})
};

const distanceBetweenAtoms = (atomA, atomB) => {
  return Math.sqrt(
    Math.pow(atomA.x - atomB.x, 2) +
    Math.pow(atomA.y - atomB.y, 2) +
    Math.pow(atomA.z - atomB.z, 2))
};
