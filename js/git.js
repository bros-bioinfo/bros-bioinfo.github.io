$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {
  var text = data;
});

  var text2 = text.match(/"path": (.+)/g);
  console.log(text2);
