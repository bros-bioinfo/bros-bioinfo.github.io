$.get("https://api.github.com/repos/bros-bioinfo/bros-bioinfo.github.io/git/trees/master?recursive=1", function(data) {
  test = String(data).replace(/^((?!md).)*$/gm, "");

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

  while (n < 80) {
    m = n - 1;
    if (m < 0) {
      m = 11;
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

    var tab = ["ALGO_PROG","IMAGE_NUM","OMIC_BIOINFO","STATS"];
    var space = "\xa0";
    var i = 0;

    while (i<5)
    {
    if (prevurl.indexOf(tab[i]) >= 0) {

          while (space.length < (tab[i]).length) {
            space += "\xa0";
          }
          url = url.replace(tab[i], space)
              if (url.indexOf(tab[i+1]) == -1) {
                url = url.replace("╶─","╰─");
              }
        }
        url = url.replace(tab[i], "<br>" + tab[i]);
i++
    }




/*
    //SECTION1
    if (prevurl.indexOf(SECTION1) >= 0) {

      while (space.length < (SECTION1).length) {
        space += "\xa0";
      }
      url = url.replace(SECTION1, space)
      if (url.indexOf(SECTION2) == -1) {
        url = url.replace("╶─", "╰─");
      }
    }
    url = url.replace(SECTION1, "<br>" + SECTION1);

    //SECTION2
    if (prevurl.indexOf(SECTION2) >= 0) {
      while (space.length < (SECTION2).length) {
        space += "\xa0";
      }
      url = url.replace(SECTION2, space);
      if (url.indexOf(SECTION3) == -1) {
        url = url.replace("╶─", "╰─");
      }
    }

    url = url.replace(SECTION2, "<br>" + SECTION2);


    //SECTION3
    if (prevurl.indexOf(SECTION3) >= 0) {
      while (space.length < (SECTION3).length) {
        space += "\xa0";
      }
      url = url.replace(SECTION3, space);
      if (url.indexOf(SECTION4) == -1) {
        url = url.replace("╶─", "╰─");
      }
    }
    url = url.replace(SECTION3, "<br>" + SECTION3);


    //SECTION4
    if (prevurl.indexOf(SECTION4) >= 0) {
      while (space.length < (SECTION4).length) {
        space += "\xa0";
      }
      url = url.replace(SECTION4, space);
      if (url.indexOf(SECTION5) == -1) {
        url = url.replace("╶─", "╰─");
      }
    }
    url = url.replace(SECTION4, "<br>" + SECTION4);
*/



    console.log("URL" + url);

    //COMPACTAGE

    ulien = strarray[n];
    urlreworked = '">' + url + '</a>';
    ulien = ulien.replace(/"><\/a>/gm, urlreworked);
    ulien = ulien.replace(/  /gm, "");

    console.log("ulien:" + ulien);
    $("#gitlist").append(ulien + "<br>");
    n++;
  }

}, 'text');
