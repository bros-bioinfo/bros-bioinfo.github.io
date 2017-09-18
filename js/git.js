document.querySelector("#my-github-projects").addEventListener("click", function(event){
    event.preventDefault();
    var file = "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1";
    console.log(file)
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET",file,false);
      rawFile.onreadystatechange = function() {
          if(rawFile.readyState === 4) {
              if(rawFile.status === 200 || rawFile.status === 0)
              {
                  var allText = rawFile.responseText;
                  allText.replace(/^.*path.*$/mg, "");
                  console.log(allText);
              }
          }
      }
      rawFile.send(null);
}, false);
