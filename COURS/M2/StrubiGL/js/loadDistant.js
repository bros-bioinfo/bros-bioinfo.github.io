'use strict';
const PATH = 'https://files.rcsb.org/view/';

$("#ok").click((event) => {
  let pdbId = $("#pdb").val();
  let url = `${PATH}${pdbId.toUpperCase()}.pdb`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        console.log("Download done");
        return response.text();
      } else {
        console.log("Wait")
      }
    })
    .then(txt => {
      let structure = parsePDB(txt);
      console.log(structure);
    })
    .catch(error => console.log(error))
});
