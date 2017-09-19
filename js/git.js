
$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {
test = String(data).replace(/^((?!md).)*$/gm,"");
x = 0
while (x < 80){
test = test.replace(",","<br>");
test = test.replace('"path": "','');
test = test.replace('"','');
test = test.replace('.md','');
x++;
}


$("#gitlist").html(test+"<br>");

console.log(data+"\n");

}, 'text');
