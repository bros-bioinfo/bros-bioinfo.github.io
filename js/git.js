document.querySelector("#my-github-projects").addEventListener("click", function(event){
    event.preventDefault();
    var file = "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1";
    console.log(file)

}, false);
