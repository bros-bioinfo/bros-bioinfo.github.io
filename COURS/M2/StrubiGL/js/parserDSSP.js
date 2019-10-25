const parseDSSP = (text) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(text, "application/xml");
  console.log(doc);

  let responses = doc.querySelectorAll("response");
  console.log(responses);
  let sec_struct = [...responses].reduce((sec_struct, residue) => {
      let value = residue.querySelector("value").textContent;
      let chain = residue.querySelector("chain").textContent;
      let AA = residue.querySelector("type").textContent;
      let number = residue.querySelector("pdb_number").textContent;
      if (!(chain in sec_struct.fasta)) {
        sec_struct.fasta[chain] = [];
        sec_struct.values[chain] = [];
      }
      sec_struct.fasta[chain].push(IUPAC.threeToOne(AA));
      sec_struct.values[chain].push(value);
      return sec_struct;
    }, {"fasta": {}, "values": {}}
  );

  let display = document.getElementById("display");
  for (let chain in sec_struct.fasta) {
    display.innerText += `\n${chain}\n${sec_struct.fasta[chain].join("")}\n${sec_struct.values[chain].join("")}\n`;
  }

};
