# Javascript

## JS: introduction

### JavaScript (or JS)

#### Versions

- JavaScript 5 (or ECMAScript 5.1)
- Available in all the browsers
- ECMAScript 2015 (or ECMAScript 6 or ES6)
- Not all the specs are implemented (browser checking required)

#### Features
- **Imperative** and structured programming (if statement, loops, etc.)
- **Object-oriented** programming language based on **prototype** for inheritance (no class).

  - Function as constructor
  - Function as method

- **Functional** programming paradigm (first-class: functions considered as object)

  - High-order functions
  - Anonymous
  - Variables, Arguments, etc.


In a HTML page, the code is written within a \<script> element. It may be located:
+ within the \<head> element
 ```js
  <script type=”text/javascript”>
  console.log(“Hello World”);
  </script>
  External file: <script
  type=”text/javascript” src=”myScript.js”></script>
  ```
+ Everywhere in the \<body> element. **Best place**: At the end of \<body> when the
  page is fully loaded.
+ BAD!! Directly in HTML element `<p
  onclick="alert('Hello');">Click on me </p>`

## JS: comments

To document the program, you may add comments that won't be executed by the language engine.

- In JS, we have two different comments for single-line and multi-lines.

```javascript
var pi = 3.14; // Single-line comment

// This code is commented → var i = 10;

/*
Multi-line
comment
*/
```
## JS: semicolon
Each expression must be ended by a semicolon.
var i = 1 **;**
i = i + 3 **;**
i = 2 * i **;** i = i / 10 **;**

# JS: basics

## Variables

```javascript
/*
 2017-09-12
 Jean-Christophe Taveau

 Basics of JS Programming
*/

// Display Hello World
IJ.log('Hello World');
IJ.log(3.14); // PI number

/**** TD #1: Variables ****/
var i; // step : declaration
i = 12; // step: init
var this_is_a_variable = 1;
var var0 = 23;
// used as iterators in loops:
// i j k l m n p
var width = 100;
var height = 200;
var widthOfImage = 200;
var width_of_image = 300;

// JavaScript 5.0
// ECMAScript 2015 or 6
// let foo = 123;
// const PI = 3.14;

var fooz = 234;
var baz;
fooz = 567;
baz = fooz + 1;

// Op: + * / - %
var myCos = Math.cos(0.0);
IJ.log(myCos);
IJ.log(baz);

fooz = 10;
baz = 20;
var tmp;
tmp = fooz;
fooz = baz;
baz = tmp;
```
