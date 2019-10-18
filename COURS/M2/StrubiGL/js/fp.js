'use strict';

//Pure functions

//Example
let output = new Array(10);
for (let i = 0; i < 10; i++) {
  output[i] = 2 * i;
}
console.log(output);

//No Loops
//function map..
const range = (start, stop, step = 1) => {
  let arr = [];
  for (let j = start; j < stop; j += step) {
    arr.push(j)
  }
  return arr;

}

const func = function (v, idx, arr) {
  return 2 * idx;
}
let out = new Array(10);
let even = out.map(func);


//function filter
const odd = (v) => v % 2 === 1;

let list = range(0, 50);
let filtered = list.filter(odd);
console.log(filtered, filtered.length);

//Example

let numbers = range(0, 20, 1);
const ran = function (v) {
  let r = Math.random()
  return Math.floor(r * 20);
}

let randoms = numbers.map(ran);
console.log(randoms);

//function reduce
const maxFunc = function (accu, v, idx) {
  if (accu < v) {
    accu = v;
  }
  return accu;
}


const mimax = (accu, v) => ({
  min: (accu.min > v) ? v : accu.min,
  max: (accu.max < v) ? v : accu.max,
})
let init = {
  min: randoms[0],
  max: randoms[0],
}
let mean = randoms.reduce((accu, v) => accu + v, 0) / randoms.length;
let maxx = randoms.reduce(mimax, init);
console.log(mean);

//High order functions
//Currying
function add(a) {
  return function (b) {
    return a + b;
  }
}

const add5 = add(5);
console.log((add5)(7));

function rand(m) {
  return function (v) {
    let r = Math.floor(Math.random() * m);
    return r;
  }
}

const rand30 = rand(30);
let numb3rs = range(0, 5);
let phantoms = numb3rs.map(rand30);
console.log(phantoms);

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

let matout = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//map reduce filter

const flatten = (accu, row) => [...accu, ...row];

let mtx = matrix.reduce(flatten, []);

console.log(mtx);

const compose = (f, g) => (x) => f(g(x));

const scalarMul = (k) => (arr) => arr.map(value => value * k);

const scalarAdd = (k) => (arr) => arr.map(value => value + k);

console.log(scalarMul(3)(range(0, 30)));
console.log(scalarAdd(3)(range(0, 15)));

const fog = compose(scalarMul(3), scalarAdd(2));

console.log(fog(range(0,10)));

const pipe = (f, g) => (x) => g(f(x));

const pipeFpG = pipe(scalarMul(3), scalarAdd(2));

console.log(pipeFpG(range(0,10)));


