'use strict';

// JSLint
// 

// Grunt.js
// Gulp
// window.

var name = 'Ball',
	number = 1,
	isTrue = true;



Expression / Statement

console.log(name);
x = 1 + 2;
if (name == 'Ball') ? 'Hello':'World';


/**************************
 * Number
 * ***********************/

// produce new value with arthmetic
100 + 4 * 11 - 2 									// result from expression is new number

// '/' '*' '+' '-'
// with same precedence will proceed from left to right

var a = '42';
var b = 1;
console.log(b + a);


100 / 0												// result is NaN (not a number)

/**************************
 * String
 * ***********************/

"Patch my boat with chewing gum \n and ironic"
'Monkeys wave goodbye'

// The string has to stay on a single line

"A new line character is written like \"\\n\""

'A new line character is written "like"'

// String concatenate
"con" + "cat" + "e" + "nate"

// Automatic type conversion
console.log(8 * null)										// 0
console.log("5" - 1)										// 4
console.log("5" + 1)										// "51"
console.log("five" * 2)									// NaN
console.log(false == 0)									// true

// Unary Operator
console.log(typeof 4.5)
console.log(typeof "x")

// Boolean
console.log(3 > 2)											// true
console.log("Aardvark" < "Zoroaster")		// true
console.log("A" < "a")									// true
// NaN is not equal to itself
console.log(NaN == NaN)									// false

// Logical operator
console.log(true && false)							// false
console.log(false || true)							// true

// Ternary -> condition operator
console.log(true ? 1 : 2)								// 1
console.log(false ? 1 : 2)							// 2


// Undefined vs null
var foo																	// undefined
var bar = null													// null

console.log(foo == bar)									// true
console.log(foo === bar)								// false
console.log(foo == null)								// true
console.log(foo === null)								// false

/*
 * == will compare value
 * === will compare type and value
 */

// Null is primitive data type
console.log(typeof null)								// object
console.log(typeof undefined)						// undefined

// While loop
// How to print 0, 2, 4, 6, 8
var number = 0;
while (number <= 12) {
	console.log(number);
	number += 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
	result *= 2;
	counter += 1;
}
console.log(result);									// 1024

// For loops
for (var number = 0; number <= 12; number += 2)
	console.log(number);

var result = 1;
for (var counter = 0; counter < 10; counter += 1)
	result *= 2;
console.log(result);

for (var current = 20; ; current++) {
	if (current % 7 == 0)
		break;
	console.log(current);
}

// Switch condition, dispatching on a value
if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();

switch(prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
		break;
	case "cloudy":
		console.log("Go outside.");
		break;
	case default:
		console.log("Unknown weather type!");
		break;
}

// Exercise #1
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

// Exercise #2
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}