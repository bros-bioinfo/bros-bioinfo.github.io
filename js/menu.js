function getTree() {
  var data = 
;
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





