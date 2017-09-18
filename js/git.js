
/*$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {

  var text1 = data;
  var text2 = String(text1).match(/"path": (.+)/g);
  var str = String(text2);
$("#gitlist").text(String(str));

var string = str;
string.replace(",","<br><br>");
document.getElementById("gitlist").innerHTML = string;
console.log(string);

}, 'text');

*/
$("#gitlist").load("list.php");
