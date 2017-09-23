# Javascript

<div id="toc"></div>

## Introduction

### JavaScript (or JS) Versions

- JavaScript 5 (or ECMAScript 5.1)
- Available in all the browsers
- ECMAScript 2015 (or ECMAScript 6 or ES6)
- Not all the specs are implemented (browser checking required)

### Features
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
  ```html
  <script type="text/javascript">
  console.log("Hello World");
  </script>
  ```
+ By calling an external file in html:
  ```html
  <script type="text/javascript" src="myScript.js"></script>
  ```
+ Everywhere in the \<body> element. **Best place**: At the end of \<body> when the
  page is fully loaded.
+ **Deprecated!!** Directly in HTML element `<p
  onclick="alert('Hello');">Click on me </p>`


## JS: The Basics


### Comments

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
### Semicolon
Each expression must be ended by a semicolon.
```javascript
var i = 1 **;**
i = i + 3 **;**
i = 2 * i **;** i = i / 10 **;**
```

### Variables

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
#### Number
```javascript
/*
2017-09-19
Name

Basics of JS programming
*/

var i=10;
var j=10.12;
var k=1e16;

IJ.log(i);
```

#### String

```js
var txt="this is a string";
var txt1='this is also a string';
/*var txt2='doesnot work";
var txt2 = "c'estle printemps";
var txt2 = 'c\'estle printemps';*/
var concatenate = 'today'+'is tuesday'; // today is tuesday
var concatenate1= 'value'+txt;//value: this is a string
```

#### Array

```js
var arr=[];//empty array
arr[0] = 4;
arr[1]=6;
arr[2]=8;

var arr2=[4,6,8];

var len=arr.length; // 3
var len2 = arr2.length; // length is an attribute of arr2


// functions
arr.push(10);
arr.push(12);

// Read the last element of the array
var last = arr[arr.length-1];
var first = arr[0];

var arr3 = [10,'text',true,[1,2,3]];
// ACGT
//A 1000
//C 0100
//G 0010
//T 0001

```

#### Array of Arrays

```js
var identity = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
var row = identity[1]; // [0,1,0,0]
var value = row[1]; // [1]

var value2 = identity[1][1]; // 1

var row3 = identity[2]; // [0,0,2,0]
var value3 = row3[3]; // [0]
var myvalue3 = identity[2][3]; // 0

var new_identity = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
var row2_column0 = new_identity[0 + 4 * 2]; // x + width * y = 0+4*2 = 8
```

#### Object in JS

```js
var obj = {}, // empty object;
obj.width = 2;
obj.height = 2;
obj.pixels = [12,13,14,15];

IJ.log(obj.width)

var obj2 = {
  width:3,
  height:3,
  pixels[0,1,2,3,4,5,6,7,8]}
```

- boolean :

  > True False

- number:

  > byte int (32 bits) long (int 64 or 128 bits) float (floating point numbers)

- string

- array (python = list)

- object
```

(Work in progress)
```
<script>console.log("test")</script>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
	<script type="text/javascript">
	/**
	 * TocJS (https://github.com/nghuuphuoc/tocjs)
	 *
	 * Generate a table of contents based on headings
	 *
	 * @author      http://twitter.com/nghuuphuoc
	 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
	 * @license     MIT
	 */

	(function($) {
	    var Toc = function(element, options) {
	        this.$element = $(element);
	        this.options  = $.extend({}, Toc.DEFAULT_OPTIONS, options);
	        this.headings = [];

	        this.$element.addClass(this.options.elementClass);

	        var that = this;
	        $(this.options.selector).each(function(index, node) {
	            $(node)
	                .data('tagNumber', parseInt(node.tagName.substring(1)))	    // 1...6
	                .data('index', 1)
	                .data('numbering', '1');
	            that.headings.push(node);
	        });

	        if (this.headings.length > 0) {
	            this.render();
	        }
	    };

	    /**
	     * The default options
	     */
	    Toc.DEFAULT_OPTIONS = {
	        selector: 'h1, h2, h3, h4, h5, h6',
	        elementClass: 'toc',
	        rootUlClass: 'toc-ul-root',
	        ulClass: 'toc-ul',
	        prefixLinkClass: 'toc-link-',
	        heading: null,

	        /**
	         * Define the indexing formats for each heading level
	         *  indexingFormats: {
	         *      headingLevel: formatter
	         *  }
	         *
	         *  headingLevel can be 'h1', 'h2', ..., 'h6'
	         *  formatter can be:
	         *  - 'number', '1':        The headings will be prefixed with number (1, 2, 3, ...)
	         *  - 'upperAlphabet', 'A': Prefix headings with uppercase alphabetical characters (A, B, C, ...)
	         *  - 'lowerAlphabet', 'a': Prefix headings with lowercase alphabetical characters (a, b, c, ...)
	         *  - 'upperRoman', 'I':    Prefix headings with uppercase Roman numerals (I, II, III, ...)
	         *  - 'lowerRoman', 'i':    Prefix headings with lowercase Roman numerals (i, ii, iii, ...)
	         *
	         *  You can define different formatter for each heading level:
	         *  indexingFormats: {
	         *      'h1': 'upperAlphabet',  // 'A'
	         *      'h2': 'number',         // '1'
	         *      'h3': 'lowerAlphabet'   // 'a'
	         *  }
	         *
	         * If you want to set indexing formats for levels:
	         *  indexingFormats: formatter
	         *
	         * Example:
	         *      indexingFormats: 'number'   => Prefix all headings by number
	         *      indexingFormats: '1AaIi'    => Prefix 1st level heading by number
	         *                                     Prefix 2nd level heading by uppercase character, and so forth.
	         */
	        indexingFormats: {}
	    };

	    Toc.prototype = {
	        constructor: Toc,

	        /**
	         * Render table of content
	         */
	        render: function() {
	            var h           = {},
	                headings    = this.headings,
	                numHeadings = this.headings.length;

	            for (var i = 0; i < numHeadings; i++) {
	                var currTagNumber = $(headings[i]).data('tagNumber');
	                if (i == 0) {
	                    h[headings[0].tagName] = $(headings[0]);
	                } else {
	                    var prevTagNumber = $(headings[i - 1]).data('tagNumber'),
	                        prevNumbering = String($(headings[i - 1]).data('numbering')).split('.');

	                    switch (true) {
	                        // Case 1:
	                        // The current heading is at the same level with previous one
	                        //	h3___________ <== previous heading
	                        //	h3___________ <== current heading
	                        case (currTagNumber == prevTagNumber):
	                            var index = $(headings[i - 1]).data('index') + 1;
	                            $(headings[i]).data('index', index);
	                            if (prevNumbering.length == 1) {
	                                $(headings[i]).data('numbering', parseInt(prevNumbering[0]) + 1);
	                            } else {
	                                prevNumbering.pop();
	                                prevNumbering.push(index);
	                                $(headings[i]).data('numbering', prevNumbering.join('.'));
	                            }
	                            h[headings[i].tagName] = $(headings[i]);
	                            break;

	                        // Case 2:
	                        // The current heading is child of the previous one
	                        //	h3____________ <== previous heading
	                        //		h4________ <== current heading
	                        case (currTagNumber > prevTagNumber):
	                            prevNumbering.push('1');
	                            $(headings[i]).data('index', 1)
	                                .data('numbering', prevNumbering.join('.'));
	                            h[headings[i].tagName] = $(headings[i]);
	                            break;

	                        // Case 3:
	                        //	h2____________ <== (*) the closest heading that is at the same level with current one
	                        //		...
	                        //		h4________ <== previous heading
	                        //	h2____________ <== current heading
	                        case (currTagNumber < prevTagNumber):
	                            // Get the cloest heading (*)
	                            var closestHeading   = h[headings[i].tagName];

	                            // Now I come back the case 1
	                            var closestNumbering = String($(closestHeading).data('numbering')).split('.'),
	                                index			 = $(closestHeading).data('index') + 1;
	                            $(headings[i]).data('index', index);
	                            if (closestNumbering.length == 1) {
	                                $(headings[i]).data('numbering', parseInt(closestNumbering[0]) + 1);
	                            } else {
	                                closestNumbering.pop();
	                                closestNumbering.push(index);
	                                $(headings[i]).data('numbering', closestNumbering.join('.'));
	                            }

	                            h[headings[i].tagName] = $(headings[i]);
	                            break;

	                        default:
	                            break;
	                    }
	                }
	            }

	            var numberingMap = {},
	                $toc         = $('<ul/>').addClass(this.options.rootUlClass)
	                                         .addClass(this.options.ulClass)
	                                         .appendTo(this.$element);
	            // Add heading
	            if (this.options.heading) {
	                $('<li/>').addClass('toc-heading')
	                          .wrapInner($('<a/>').attr('href', '#').html(this.options.heading))
	                          .appendTo($toc);
	            }

	            for (var i = 0; i < numHeadings; i++) {
	                // Generate Id
	                var id        = this.generateHeadingId(headings[i]),
	                    numbering = String($(headings[i]).data('numbering')).split('.'),
	                    $a        = $('<a/>').html($(headings[i]).text())
	                                         .addClass(this.options.prefixLinkClass + numbering.length)
	                                         .attr('href', '#' + id);

	                // Add anchor icon to heading
	                $('<a/>').addClass('toc-anchor')
	                         .html('#')
	                         .attr('href', '#' + id)
	                         .hide()
	                         .appendTo(headings[i]);
	                $(headings[i]).on('mouseover', function() {
	                    $(this).find('.toc-anchor').show();
	                }).on('mouseout', function() {
	                    $(this).find('.toc-anchor').hide();
	                });

	                if (numbering.length == 1) {
	                    var $li = $('<li/>').wrapInner($a).appendTo($toc);
	                } else {
	                    var last = numbering.pop(),
	                        n    = numbering.join('.'),
	                        uls  = numberingMap[n].find('ul'),
	                        $ul  = uls.length > 0 ? uls.get(0) : $('<ul/>').addClass(this.options.ulClass).appendTo(numberingMap[n]),
	                        $li  = $('<li/>').wrapInner($a).appendTo($ul);

	                    numbering.push(last);
	                }

	                numberingMap[numbering.join('.')] = $li;

	                this.prependIndexing(i, $a);
	            }
	        },

	        /**
	         * Generate heading Id
	         *
	         * @param {Number} heading
	         * @return {String}
	         */
	        generateHeadingId: function(heading) {
	            if (!$(heading).attr('id')) {
	                var id = $(heading)
	                                .text()
	                                .toLowerCase()
	                                .replace(/\s+|\/|\\/g, '-')
	                                .replace(/á|à|ạ|ả|ã|ă|ắ|ằ|ặ|ẳ|ẵ|â|ấ|ầ|ậ|ẩ|ẫ|ä/g, 'a')
	                                .replace(/đ/g, 'd')
	                                .replace(/é|è|ẹ|ẻ|ẽ|ê|ế|ề|ệ|ể|ễ/g, 'e')
	                                .replace(/í|ì|ị|ỉ|ĩ/g, 'i')
	                                .replace(/ó|ò|ọ|ỏ|õ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ợ|ở|ỡ/g, 'o')
	                                .replace(/ú|ù|ụ|ủ|ũ|ư|ứ|ừ|ự|ử|ữ/g, 'u')
	                                .replace(/ý|ỳ|ỵ|ỷ|ỹ/g, 'y')
	                                .replace(/[^a-z0-9-]/g, '');

	                var found = true, counter = 0;
	                while (found) {
	                    found = $('#' + id + (counter == 0 ? '' : '-' + counter)).length > 0;
	                    if (found) {
	                        counter++;
	                    } else {
	                        id = id + (counter == 0 ? '' : '-' + counter);
	                    }
	                }

	                $(heading).attr('id', id);
	                return id;
	            }

	            return $(heading).attr('id');
	        },

	        /**
	         * Prepend indexing string to link/heading
	         *
	         * @param {Number} index
	         * @param {HTMLElement} linkElement
	         */
	        prependIndexing: function(index, linkElement) {
	            var heading   = this.headings[index],
	                tagNumber = parseInt($(heading).data('tagNumber')),
	                format    = this.getIndexingFormat(tagNumber);
	            if (null == format) {
	                return;
	            }
	            var numbering = String($(heading).data('numbering')).split('.'), n = numbering.length, converted = [], j = 0;
	            for (var i = 0; i < n; i++) {
	                j      = i + (tagNumber - n) + 1;
	                format = this.getIndexingFormat(j);
	                if (format) {
	                    converted.push(this.convertIndexing(numbering[i], format));
	                }
	            }

	            if (converted.length > 0) {
	                var text = converted.join('. ') + '. ';
	                $(linkElement).prepend(text);
	                $(heading).prepend(text);
	            }
	        },

	        /**
	         * Get the indexing format for given heading level
	         *
	         * @param {Number} level Can be 1, 2, ..., 6
	         * @return {String} Can be null or one of 'number', 'lowerAlphabet', 'upperAlphabet', 'lowerRoman', 'upperRoman'
	         */
	        getIndexingFormat: function(level) {
	            if ('object' == typeof this.options.indexingFormats) {
	                return this.options.indexingFormats['h' + level] ? this.options.indexingFormats['h' + level] : null;
	            }

	            if ('string' == typeof this.options.indexingFormats) {
	                if (['upperAlphabet', 'lowerAlphabet', 'number', 'upperRoman', 'lowerRoman'].indexOf(this.options.indexingFormats) != -1) {
	                    return this.options.indexingFormats;
	                }

	                // indexingFormats defines format for each heading level (1AaIi, 111111, for example)
	                if (this.options.indexingFormats.length < level) {
	                    return null;
	                }
	                switch (this.options.indexingFormats[level - 1]) {
	                    case '1':
	                    case 1:
	                        return 'number';
	                    case 'A':
	                        return 'upperAlphabet';
	                    case 'a':
	                        return 'lowerAlphabet';
	                    case 'I':
	                        return 'upperRoman';
	                    case 'i':
	                        return 'lowerRoman';
	                    default:
	                        return null;
	                }
	            }

	            return null;
	        },

	        /**
	         * Format an indexing number in given type
	         *
	         * @param {Number} number
	         * @param {String} type Can be one of supported formats: number, lowerAlphabet, upperAlphabet, lowerRoman, upperRoman
	         * @returns {String}
	         */
	        convertIndexing: function(number, type) {
	            var lowerChars = 'abcdefghijklmnopqrstuvwxyz', upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length = lowerChars.length;
	            switch (type) {
	                case 'upperAlphabet':
	                case 'A':
	                    return (number > length) ? upperChars[number % length - 1] : upperChars[number - 1];

	                case 'lowerAlphabet':
	                case 'a':
	                    return (number > length) ? lowerChars[number % length - 1] : lowerChars[number - 1];

	                case 'number':
	                case '1':
	                case 1:
	                    return number;

	                case 'upperRoman':
	                case 'I':
	                    return this.convertToRomanNumeral(number);

	                case 'lowerRoman':
	                case 'i':
	                    return this.convertToRomanNumeral(number).toLowerCase();

	                default:
	                    return '_';
	            }
	        },

	        /**
	         * Convert a number to Roman numeral
	         *
	         * @param {Number} number
	         * @return {String}
	         */
	        convertToRomanNumeral: function(number) {
	            if (!+number) {
	                return '';
	            }
	            var digits = String(+number).split(''),
	                key    = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
	                    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
	                    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
	                roman  = '',
	                i      = 3;
	            while (i--) {
	                roman = (key[+digits.pop() + (i * 10)] || '') + roman;
	            }
	            return Array(+digits.join('') + 1).join('M') + roman;
	        }
	    };

	    // Plugin definition

	    $.fn.toc = function(options) {
	        return this.each(function() {
	            var $this = $(this), data = $this.data('toc');
	            if (!data) {
	                $this.data('toc', (data = new Toc(this, options)));
	            }
	        });
	    };

	    $.fn.toc.Constructor = Toc;
	}(window.jQuery));
	</script>
	<script type="text/javascript">
$(document).ready(function() {
    // Set the width for table of content
    $('#toc').width($('#toc').parents().width());

    // Generate table of content
    /*
    $('#toc').toc({
        elementClass: 'toc',
        ulClass: 'nav',
        heading: 'Table of Contents',
        indexingFormats: {
            'h1': 'upperRoman',
            'h2': 'number',
            'h3': 'upperAlphabet',
            'h4': 'lowerAlphabet',
            'h5': 'number'
        }
    });
    */

    /*
    $('#toc').toc({
        elementClass: 'toc',
        ulClass: 'nav',
        heading: 'Table of Contents',
        indexingFormats: {
            'h1': 'I',
            'h2': '1',
            'h3': 'A',
            'h4': 'a'
        }
    });
    */

    $('#toc').toc({
        elementClass: 'toc',
        ulClass: 'nav',
        heading: 'Table of Contents',
        indexingFormats: 'I1Aa'
    });

    // Scroll to the table of content section when user scroll the mouse
    $('body').scrollspy({
        target: '#toc',
        offset: $('#headerNav').outerHeight(true) + 40
    });

    setTimeout(function() {
        var $sideBar = $('#toc');
        $sideBar.affix({
            offset: {
                top: function() {
                    var offsetTop      = $sideBar.offset().top,
                        sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10),
                        navOuterHeight = $('#headerNav').height();
                    return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                },
                bottom: function() {
                    return (this.bottom = $('footer').outerHeight(true));
                }
            }
        });
    }, 100);
});
</script>
