x=1;
while(x<=10){
console.log("I'm a while loop    x= "+x);
x++
}
console.log("\n¯\\_(ツ)_/¯ \n");

for(var i=1; i<=10;i++){
  console.log("I'm a For loop     i= "+i);
}


function Data(image, annotation) {
    this.image = image;
    this.annotation = annotation;
}

function annotate(data) {
    var importer = new JavaImporter(Packages.ij.gui.GenericDialog, Packages.ij.IJ);
    with (importer) {
        var gd = new GenericDialog("Annotate");
        gd.addStringField("New annotation:", data.annotation, data.annotation.length);
        gd.showDialog();
        if (gd.wasCanceled()) return;
        // assign new annotation:
        var newAnnotation = gd.getNextString();
        IJ.log("Changing the annotation from \"" + data.annotation + "\" to \"" + newAnnotation + "\"");
        data.annotation = newAnnotation;
    }
}

var importerIJ = new JavaImporter(Packages.ij.IJ);
with (importerIJ) {
    var data = new Data(IJ.getImage(), "The current image");
    IJ.log("data contains: " + data.image + "\n" + "with annotation: " + data.annotation);
    // Invoke on the existing Data object:
    annotate(data);
}

function map(fn, ip) {
  var ip2 = ip.duplicate().convertToFloat();
  var pix = ip2.getPixels();

  var n_threads = java.lang.Runtime.getRuntime().availableProcessors();
  var threads = new Array();

  var ai = new java.util.concurrent.atomic.AtomicInteger(0);
  var width = ip.getWidth();
  var height = ip.getHeight();

  var arg = arguments[2];

  for (var t = 0; t < n_threads; t++) {
    threads[t] = new java.lang.Thread( function() {
        // Process one line at a time:
        for (var line = ai.getAndIncrement(); line < height; line = ai.getAndIncrement()) {
           var offset = line * width;
           for (var i = 0; i < width; i++) {
               // invoke function on each pixel, with the optional extra argument
               pix[offset + i] = fn(pix[offset + i], arg);
           }
        }
    });
    threads[t].start();
  }

  // Wait until all threads finish:
  for (var t = 0; t < n_threads; t++) {
    threads[t].join();
  }

  return ip2;
}
