$.get("https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function(data) {
  test = String(data).replace(/^((?!md|pdf).)*$/gm, "");

  x = 0;
  while (x < 80) {
    test = test.replace(",", "");
    test = test.replace('"path": "', '');
    test = test.replace('"', '');
    test = test.replace('.md', '');
    x++;
    test = test.replace(/\n\n/g, "\n");
  }


  test = test.replace(/COURS/mg, '<a href="http://bros-bioinfo.github.io/COURS');
  test = test.replace(/\n/g, '"></a>\n');
  test = test.replace(/"><\/a>\n/, '');
  test = test.replace(/README"><\/a>/, '');
  console.log("AVANT SPLIT:" + test);

  var strarray = test.split("\n");

  console.log("ARRAY:" + strarray[1]);

  //FORMATAGE DE L'URL
  n = 0;
var nbfichiers = (data.match(/md/g) || []).length;
console.log("NOMBRES DE FICHIERS:"+nbfichiers);
  while (n < nbfichiers) {
    m = n - 1;
    if (n == 0) {
      m = nbfichiers;
    }
    var url = strarray[n];
    var prevurl = strarray[m];
    url = url.replace(/<a href="http:\/\/bros-bioinfo.github.io\/COURS\//gm, '');
    url = url.replace(/"><\/a>/gm, '');
    separator = ' ╶─ ';
    url = url.replace(/\//gm, separator);
    var SECTION1 = "ALGO_PROG";
    var SECTION2 = "IMAGE_NUM";
    var SECTION3 = "OMIC_BIOINFO";
    var SECTION4 = "STATS";
    var space = "\xa0";

    var tab = ["ALGO_PROG", "IMAGE_NUM", "OMIC_BIOINFO", "STATS", "TUTO_&_FICHES"];
    var space = "\xa0";
    var i = 0;

    while (i < tab.length ) {
      if (prevurl.indexOf(tab[i]) >= 0) {

        while (space.length < (tab[i]).length + 3) {
          space += "\xa0";
        }
        url = url.replace(tab[i], space);
        if (url.indexOf(tab[i + 1]) == -1) {
          url = url.replace("╶─", "╰─");
        }
      }
      var TD = "TD"+i;

      url = url.replace(tab[i], "<br>" + tab[i]);
      url = url.replace(tab[i], '<div style="color:white"><i class="fa fa-folder-open" aria-hidden="true"></i> ' + tab[i] + "</div>");
      url = url.replace(/ ╶─ PROG ╶─/,' ╶─ <div style="color:white" class="prog"><i class="fa fa-folder-open" aria-hidden="true"></i> PROG </div>╶─');
      url = url.replace(/ ╰─ PROG ╶─/,' ╰─ <div style="color:white" class="prog"><i class="fa fa-folder-open" aria-hidden="true"></i> PROG </div>╶─');
      url = url.replace(/ ╰─ USI ╶─/,' ╰─ <div style="color:white" class="usi"><i class="fa fa-folder-open" aria-hidden="true"></i> USI\xa0 </div>╶─');
      url = url.replace(/╶─ TD ╶─/,' \xa0╶─ <div style="color:white" class="td"><i class="fa fa-folder-open" aria-hidden="true"></i>TD</div> ╶─');
      url = url.replace(TD,'<div style="color:white" class="td"><i class="fa fa-folder-open" aria-hidden="true"></i>'+TD+'</div>');

      i++
    }




    console.log("URL" + url);

    //COMPACTAGE

    ulien = strarray[n];
    urlreworked = '">' + url + '</a>';
    ulien = ulien.replace(/"><\/a>/gm, urlreworked);
    ulien = ulien.replace(/  /gm, "");
    ulien = ulien.replace(/╶─(?!.*╶─)(?:(?!\S+$).)*/gm,' ╶─ <i class="fa fa-file-text-o" style="color:#007bff" aria-hidden="true"></i>\n');
    ulien = ulien.replace(/╰─(?!.*╶─)(?:(?!\S+$).)*/gm,' ╰─ <i class="fa fa-file-text-o" style="color:#007bff" aria-hidden="true"></i>\n');
    console.log("ulien:" + ulien);
    $("#gitlist").append(ulien + "<br>");
    n++;
  }

}, 'text');
