/*
* Author: Eliot Ragueneau
* Aim : Count different shapes frmo an image full of squares, circles and triangles
* Circle = 78       <- 0.87 - 1.00
* Squares = 87      <- 0.69 - 0.86
* Triangles = 80    <- 0.00 - 0.68
* Total = 245
* */

'use strict';

//////////////// IMPORTS //////////////////
const IJ_PLUGINS = IJ.getDir('plugins');
load(`${IJ_PLUGINS}/javascript/nashorn_polyfill.js`);
load(`${IJ_PLUGINS}/javascript/tip-gist.js`);
load(`${IJ_PLUGINS}/javascript/tml-gist.js`);

////////////////   K-NN  //////////////////
function kNN_fit(x_train, y_train) {
    return {x: x_train, y: y_train}
}

function kNN_closest(row, model) {
    let best_dist = TML.distance(row, model.x[0]);
    let best_index = 0;
    for (let i = 0; i < model.x.length; i++) {
        let dist = TML.distance(row, model.x[i]);
        if (dist < best_dist) {
            best_dist = dist;
            best_index = i;
        }
    }
    return model.y[best_index]
}

function kNN_predict(x_test, model) {
    let predictions = [];
    for (let row of x_test) {
        let label = kNN_closest(row, model);
        predictions.push(label);
    }
    return predictions

}

////////////////  MAIN  //////////////////


// Get Results

let table = ResultsTable.getResultsTable();

// Parse data

let data = TDS.fromTableIJ(table);
// console.log(TDS.log(data));

// Extract target (Labels)
let targetFunc = TDS.columns(['Vertices']);
let target = targetFunc(data).Vertices;


// Clean data

let feature = TDS.filter(TDS.byFeatures(['Circ.', 'Round']))(data);

let len = Math.floor(data.length * 0.6);

let train_feature = feature.slice(0, len);
let train_target = target.slice(0, len);
let test_feature = feature.slice(len + 1, data.length);
let test_target = target.slice(len + 1, data.length);

// Run k-NN classifier
let model = kNN_fit(train_feature, train_target);
let predicted = kNN_predict(test_feature, model);

Console.log(TML.accuracy(test_target, predicted));