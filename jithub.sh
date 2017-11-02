#!/bin/bash
#Pierre JACQUET
#28/10/2017
#Lol Mr Taveau RPZ

echo 'function getTree() {
  var data = ' > js/menu.js #I'm a noob so i create the js directly - i don't know how to load json into javascript next


/usr/bin/tree COURS/* -f --noreport -D -P '*\.md|*\.pdf' --dirsfirst --prune -C -J >> js/menu.js #output JSON TREE \o/ YEAHHH


filename="js/menu.js"
sed -i -e 's/\"name\"/href/g' js/menu.js #replace name by href to match bootstrap standards
lineNo=1

while read -r line #Read each line of menu.js
do
    ligne="$line"
    if [[ $ligne == *"href"* ]]; then
            nameextract=`echo $ligne | sed 's/\",\"contents\":\[//'`
            nameextract=`echo $nameextract | sed 's/\"},//'`
            nameextractf=${nameextract##*/}
            nameextractf=`echo $nameextractf | sed 's/\".*$//gm'`
            echo $nameextractf
            sed -i "${lineNo}s/$nameextractf\"/$nameextractf\",name:\"$nameextractf\"/" js/menu.js
    fi
    if [[ $ligne == *"directory"* ]]; then
      sed -i "${lineNo}s/,href:\"[^\"]*\"/,href:\"#fh5co-work\"/" js/menu.js
    fi
    lineNo=$((lineNo+1))
done < "$filename"

sed -i -e 's/\"time\"/custom/g' js/menu.js #replace contents from standard json output to nodes to match bootstrap standards
sed -i -e 's/\"contents\"/nodes/g' js/menu.js #replace contents from standard json output to nodes to match bootstrap standards
sed -i -e 's/name/text/g' js/menu.js #replace name from standard json output to text in order to match bootstrap standards
sed -i -e 's/.md//g' js/menu.js #remove .md file extension
sed -i -e 's/COURS/http:\/\/bros-bioinfo.github.io\/COURS/g' js/menu.js #add-http://
#sed -i -e 's/bros-bioinfo.github.io/http:\/\/bros-bioinfo.github.io/g' menu.js #add-http://


#Formating date output from Oct 28 13:45 ----> 10281345

#OK SO I DON'T KNOW HOW TO USE DICTIONNARY IN BASH SCRIPT DON'T BLAME ME
sed -i -e 's/:\"Jan /:\"1/' js/menu.js
sed -i -e 's/:\"Feb /:\"2/' js/menu.js
sed -i -e 's/:\"Mar /:\"3/' js/menu.js
sed -i -e 's/:\"Apr /:\"4/' js/menu.js
sed -i -e 's/:\"May /:\"5/' js/menu.js
sed -i -e 's/:\"Jun /:\"6/' js/menu.js
sed -i -e 's/:\"Jul /:\"7/' js/menu.js
sed -i -e 's/:\"Aug /:\"8/' js/menu.js
sed -i -e 's/:\"Sep /:\"9/' js/menu.js
sed -i -e 's/:\"Oct /:\"10/' js/menu.js
sed -i -e 's/:\"Nov /:\"11/' js/menu.js
sed -i -e 's/:\"Dec /:\"12/' js/menu.js

sed -i -e 's/\([0-9]\) \([0-9]\)/\1\2/g' js/menu.js
sed -i -e 's/\([0-9]\):\([0-9]\)/\1\2/g' js/menu.js



echo ';
return data;
}

var $searchableTree=$("#tree").treeview({
data: getTree(),
enableLinks: true,
showBorder: false,
showIcon: true,
showCheckbox: false,
expandIcon: "fa fa-folder",
collapseIcon: "fa fa-folder-open",
emptyIcon: "fa fa-file-text-o",
tags: ["available"],
showTags: true,

// colors
  color: "#428bca",
  backColor: undefined,
  borderColor: undefined,
  onhoverColor: "#F5F5F5",
  selectedColor: "#FFFFFF",
  selectedBackColor: "#428bca",
  searchResultColor: "#D9534F",
  searchResultBackColor: undefined,

onNodeSelected: function(event, node) {
    if (node.nodes == undefined) {
      // sends node info to another element
    } else if (node.state.expanded) {
      // TODO collapse children
      collapseNode(node.nodeId);
    } else {
      // TODO expand children
      expandNode(node.nodeId);
    }
  //  var children = node["nodes"];
//    alert( node["nodes"][0].custom ) ;
  }

});




// SEARCH


var search = function(e) {
  var pattern = $("#input-search").val();
  var options = {
    ignoreCase: true,
    exactMatch: false,
    revealResults: true
  };
  var results = $searchableTree.treeview("search", [ pattern, options ]);

  var output = "<p>" + results.length + " matches found</p>";
  $.each(results, function (index, result) {
    output += "<p>- " + result.text + "</p>";
  });
  $("#search-output").html(output);
}

$("#btn-search").on("click", search);
//$("#input-search").on("keyup", search);



$("#btn-clear-search").on("click", function (e) {
  $searchableTree.treeview("clearSearch");
  $("#input-search").val("");
  $("#search-output").html("");
  $("#tree").treeview("collapseAll", { silent: true }); // COLLAPSE ALL

});


//COLLAPSE
$("#tree").treeview("collapseAll", { silent: true }); // COLLAPSE ALL AT START

function collapseNode(nodeId) {
  $("#tree").treeview("collapseNode", [nodeId]);
}

function expandNode(nodeId) {
  $("#tree").treeview("expandNode", [nodeId]);
}
//});

$("#recent").load("last-modified-files.txt");




' >> js/menu.js

#NOW we will get list of last modified file and we filter the list to show only md
git log --pretty=format: --name-only --since="4 days ago" | sort | uniq > last-modified-filestemp.txt

cat last-modified-filestemp.txt > last-modified-files.txt
sed -i '/\.md/!d' last-modified-files.txt
sed -i '/\"/d' last-modified-files.txt

while read -r line #Read each line of last-modified-files.txt
do
    ligne="$line"
    modified=${ligne##*/}
    echo $modified
    sed -i "s|$ligne|<a href=\"https:\/\/bros-bioinfo\.github\.io\/$ligne\">$modified<\/a><br>|" last-modified-files.txt
done < last-modified-files.txt

sed -i "s/\.md//g" last-modified-files.txt #Remove the md extension

echo '<!DOCTYPE html> <html> <head></head> <body>'| cat - last-modified-files.txt > temp && mv temp last-modified-files.txt
echo '</body></html>' >> last-modified-files.txt

rm last-modified-filestemp.txt


git add --all; git commit -m $1; git push --all
