'use strict';

const cutHEADER = (structure, line) => {
  let cuts = [
    {start: 11, end: 50, name: "classification", typeCaster: String},
    {start: 51, end: 59, name: "depDate", typeCaster: String},
    {start: 63, end: 66, name: "idCode", typeCaster: String}
  ];
  structure.header = cuts.reduce((header, cut) => {
    header[cut.name] = cut.typeCaster(line.substring(cut.start - 1, cut.end).trim());
    return header;
  }, {});
  return structure;
};

const cutATOM = (structure, line) => {
  let cuts = [
    {start: 7, end: 11, name: "serial", typeCaster: parseInt},
    {start: 13, end: 16, name: "name", typeCaster: String},
    {start: 17, end: 17, name: "altLoc", typeCaster: String},
    {start: 18, end: 20, name: "resName", typeCaster: String},
    {start: 22, end: 22, name: "chainID", typeCaster: String},
    {start: 23, end: 26, name: "resSeq", typeCaster: parseInt},
    {start: 27, end: 27, name: "iCode", typeCaster: String},
    {start: 31, end: 38, name: "x", typeCaster: parseFloat},
    {start: 39, end: 46, name: "y", typeCaster: parseFloat},
    {start: 47, end: 54, name: "z", typeCaster: parseFloat},
    {start: 55, end: 60, name: "occupancy", typeCaster: parseFloat},
    {start: 61, end: 66, name: "tempFactor", typeCaster: parseFloat},
    {start: 77, end: 78, name: "element", typeCaster: String},
    {start: 79, end: 80, name: "charge", typeCaster: String}
  ];
  structure.atoms.push(cuts.reduce((atom, cut) => {
    atom[cut.name] = cut.typeCaster(line.substring(cut.start - 1, cut.end).trim());
    return atom;
  }, {}));
  return structure;
};

const parsePDB = (text) => {
  $("#display").html(`<pre>${text}</pre>`);
  let lines = text.split('\n');

  let s3D = lines.reduce((structure, line) => {
    let key = line.substring(0, 6).trim();
    switch (key) {
      case "ATOM":
        cutATOM(structure, line);
        break;
      case "HEADER":
        cutHEADER(structure, line);
        break;
    }
    return structure;
  }, {
    atoms: [],
    header: {}
  });
  return s3D;
};
