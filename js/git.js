$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {
  var text = data;
  data.replace(/"path": (.+)/g);
  console.log(data);
});
