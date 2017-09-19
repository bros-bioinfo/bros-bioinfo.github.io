$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {
test = String(data).replace(/^((?!md).)*$/gm,"");

x = 0
while (x < 80){
test = test.replace(",","");
test = test.replace('"path": "','');
test = test.replace('"','');
test = test.replace('.md','');
x++;
}
//test = test.match(/$/gmi).join("<br>");
test = test.replace(/COURS/mg,'<br><a href="http://bros-bioinfo.github.io/COURS');
test = test.replace(/<br>/mg,'">LIEN</a><br>');

$("#gitlist").html(test);

console.log(test+"\n");

}, 'text');
