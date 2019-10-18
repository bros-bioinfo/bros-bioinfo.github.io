/*
* Load / Parse Local PDB file
* 2019/10/18
* Eliot Ragueneau
* */

const getContents = (event) => {
  let f = event.target.files[0];

  let reader = new FileReader();
  reader.onload = ev => {
    let text = reader.result;
    let struct = parsePDB(text);
    console.log(struct);
  };
  reader.readAsText(f);

};

$('#pdb').on("change", getContents);
