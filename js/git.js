
$.get( "https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function( data ) {
  data1 = String(data).replace(/^((?!md|\.R).)*$/gm,"");
//data1 = data.match(/"path": "cours(.+)\n/g);
var test = String(data1).replace("\n","<br>").replace(',','').replace('"path": "cours/',"").replace('"path":',"").replace('"','').replace('"','').replace(';','').replace("cours","").replace(".md","").replace("<br><br>","<br>");
x = 0
while (x < 80){
var test = test.replace("\n","<br>").replace(',','').replace('"path": "cours/',"").replace('cours/',"").replace('"path":',"").replace('"','').replace('"','').replace(';','').replace(".md","").replace("<br><br>","<br>").replace("/Algo","Algo");
x++;
}


$("#gitlist").html(test+"<br>");

console.log(data+"\n");

}, 'text');
