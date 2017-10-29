function getTree() {
  var data = 
[
  {"type":"directory",text:"ALGO_PROG",nodes:[
    {"type":"directory",text:"ALGO",custom:"10271345",nodes:[
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/ALGO/Algo",text:"Algo",custom:"10271345"},
    ]},
    {"type":"directory",text:"PROG",custom:"10271345",nodes:[
      {"type":"directory",text:"TD",custom:"10271345",nodes:[
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/PROG/TD/Exos_baldacci_py",text:"Exos_baldacci_py",custom:"10271345"},
      ]},
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/PROG/Intro_programmation",text:"Intro_programmation",custom:"10271345"},
    ]},
    {"type":"directory",text:"USI",custom:"10271345",nodes:[
      {"type":"directory",text:"TD",custom:"10271345",nodes:[
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/TD/1_Unix",text:"1_Unix",custom:"10271345"},
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/TD/2_Unix",text:"2_Unix",custom:"10271345"},
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/TD/3_Processus",text:"3_Processus",custom:"10271345"},
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/TD/4_Shell",text:"4_Shell",custom:"10271345"},
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/TD/7_Utilitaires",text:"7_Utilitaires",custom:"10271345"},
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/TD/shell_seb",text:"shell_seb",custom:"10271345"},
      ]},
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/ALGO_PROG/USI/Utilisation_systeme_info",text:"Utilisation_systeme_info",custom:"10271345"},
    ]},
  ]},
  {"type":"directory",text:"IMAGE_NUM",nodes:[
    {"type":"directory",text:"TD",custom:"10271345",nodes:[
      {"type":"directory",text:"TD1",custom:"10271345",nodes:[
        {"type":"file",href:"http://bros-bioinfo.github.io/COURS/IMAGE_NUM/TD/TD1/ImageJ_td1",text:"ImageJ_td1",custom:"10271345"},
      ]},
    ]},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/IMAGE_NUM/Image",text:"Image",custom:"10271345"},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/IMAGE_NUM/Javascript",text:"Javascript",custom:"10271345"},
  ]},
  {"type":"directory",text:"OMIC_BIOINFO",nodes:[
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/OMIC_BIOINFO/Omic_bioinfo",text:"Omic_bioinfo",custom:"10271345"},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/OMIC_BIOINFO/Philogenie",text:"Philogenie",custom:"10271345"},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/OMIC_BIOINFO/Recherche_sequence",text:"Recherche_sequence",custom:"10271345"},
  ]},
  {"type":"directory",text:"STATS",nodes:[
    {"type":"directory",text:"TD2",custom:"10271345",nodes:[
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/STATS/TD2/TD2",text:"TD2",custom:"10271345"},
    ]},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/STATS/Intro_stats",text:"Intro_stats",custom:"10271345"},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/STATS/seqChronoSeb",text:"seqChronoSeb",custom:"10271345"},
  ]},
  {"type":"directory",text:"TUTO_FICHES",nodes:[
    {"type":"directory",text:"PYTHON",custom:"10271345",nodes:[
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/TUTO_FICHES/PYTHON/reponse_tutorat",text:"reponse_tutorat",custom:"10271345"},
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/TUTO_FICHES/PYTHON/tutorat_(réponses)",text:"tutorat_(réponses)",custom:"10271345"},
      {"type":"file",href:"http://bros-bioinfo.github.io/COURS/TUTO_FICHES/PYTHON/tutorat_(sans_les_réponses)",text:"tutorat_(sans_les_réponses)",custom:"10271345"},
    ]},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/TUTO_FICHES/emacs",text:"emacs",custom:"10271345"},
    {"type":"file",href:"http://bros-bioinfo.github.io/COURS/TUTO_FICHES/LaTex",text:"LaTex",custom:"10271345"},
  ]},
  {"type":"report","directories":9,"files":24}
]
;
return data;
}

var $searchableTree=$("#tree").treeview({
data: getTree(),
enableLinks: true,
showBorder: false,
showIcon: true,
showCheckbox: false,
expandIcon: "glyphicon glyphicon-folder-close",
collapseIcon: "glyphicon glyphicon-folder-open",
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
    ignoreCase: $("#chk-ignore-case").is(":checked"),
    exactMatch: $("#chk-exact-match").is(":checked"),
    revealResults: $("#chk-reveal-results").is(":checked")
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



