$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {
test = String(data).replace(/^((?!md).)*$/gm,"");

x = 0;
while (x < 80){
test = test.replace(",","");
test = test.replace('"path": "','');
test = test.replace('"','');
test = test.replace('.md','');
x++;
test = test.replace(/\n\n/g,"\n");
}


test = test.replace(/COURS/mg,'<a href="http://bros-bioinfo.github.io/COURS');
test = test.replace(/\n/g,'"></a>\n');
test = test.replace(/"><\/a>\n/,'');
test = test.replace(/README"><\/a>/,'');
console.log("AVANT SPLIT:"+test);

var strarray = test.split("\n");

console.log("ARRAY:"+ strarray[1]);


n = 0;
while (n < 50){
var url = strarray[n];
url = url.replace(/<a href="http:\/\/bros-bioinfo.github.io\/COURS\//gm,'');
url = url.replace(/"><\/a>/gm,'');
back = ' → ';
url = url.replace(/\//gm,back);


console.log("URL"+url); 


ulien = strarray[n];
urlreworked = '">'+url+'</a>';
ulien = ulien.replace(/"><\/a>/gm,urlreworked);
ulien = ulien.replace(/  /gm,"");

console.log("ulien:"+ulien);
$("#gitlist").append(ulien+"<br>");
n++;
}

}, 'text');


