const getContents = (event) => {
  let f = event.target.files[0];
  console.log(event);

  let reader = new FileReader();
  reader.onload = ev => {
    let text = reader.result;
    let struct = parseDSSP(text);
    console.log(struct);
  };
  reader.readAsText(f);

};

$('#dssp').on("change", getContents);
