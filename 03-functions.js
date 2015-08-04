// Defining function

var square = function(x) {
	return x * x;
}
console.log(square(12));											// 144

var makeNoise = function() {
	console.log("Ping!!!!");
}
makeNoise();

var power = function(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
}
console.log(power(2, 10));										// 1024


var x = "outside";
var f1 = function() {
	var x = "inside f1";
};
f1();
console.log(x);																// outside

var f2 = function() {
	x = "inside f2";
}
f2();
console.log(x);																// inside f2

var landscape = function() {
	var result = "";
	var flat = function(size) {
		for (var count = 0; count < size; count++)
			result += "_";
	};
	var mountain = function(size) {
		result += "/";
		for (var count = 0; count < size; count++)
			result += "'";
		result += "\\";
	};

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
}
console.log(landscape());

// Closure (close over)
function wrapValue(n) {
	var localVarible = n;
	return function() { return localVarible; }
}
var x = 1;
var y = 2;
wrapX = wrapValue(x);
wrapY = wrapValue(y);
console.log(wrapX);
console.log(wrapY);
x = 3;
y = 4;
console.log(wrapX);
console.log(wrapY);

// Freezing the code
function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}
var factor = 2;
var twice = multiplier(factor);
console.log(twice(5));
factor = 3;
console.log(twice(5));


/*
 * Recursion: it is perfectly okay for a function to  call itself
 * as long as it takes care not to overflow the stack
 */

var power = function(base, exponent) {
	if (exponent == 0) return 1;
	else return base * power(base, exponent - 1);
}
console.log(power(2, 3));

// But this recursion version is slower than normal looping 10 times
// 
// The basic rule, which has been repeated by many programmers and
// with which I wholeheartedly agree, is to not worry about efficiency
// until you know for sure that the program is too slow.
// If it is, find out which parts are taking up the most time,
// and start exchanging elegance for efficiency in those parts.
// 
function findSolution(target) {
  function find(start, history) {
    if (start == target) return history;
    else if (start > target) return null;
    else
      return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}
console.log(findSolution(24));
/*
 * find(1, "1")
 * 	find(6, "(1 + 5)")
 * 		find(11, "((1 + 5) + 5)")
 * 			find(16, "(((1 + 5) + 5) + 5)")
 * 				too big
 * 			find(33, "(((1 + 5) + 5) * 3)")
 * 				too big
 * 			find(18, "((1 + 5) * 3)")
 * 				too big
 * 	  find(3, "(1 * 3)")
 * 		  find(8, "((1 * 3) + 5)")
 * 			 	find(13, "(((1 * 3) + 5) + 5)")
 * 				 	found!
 */

// Growing function
// You need some function that you haven't written yet and that sound like 
// it deserves its own function. You'll start by naming the function, and you'll then write
// its body. You might even start writing code that uses the function before
// you actually define the function itself.
// 
// Wanna print number of inventory
//
// 
// 
//////////// Version 1
function printFarmInventory(cows, chickens) {
	var cowString = String(cows);
	while (cowString.length < 3)
		cowString = "0" + cowString;
	console.log(cowString + " Cows");
	var chickenString = String(chickens);
	while(cowString.length < 3)
		chickenString = "0" + chickenString;
	console.log(chickenString + " Chickens");
}


//////////// Version 2 
function printFarmInventory(cows, chickens) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
}
function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3)
    numberString = "0" + numberString;
  console.log(numberString + " " + label);
}

/////////// Version 3
function printFarmInventory(cows, chickens) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
}
function zeroPad(number, width) {
	var string = String(number);
	while (string.length < width)
		string = "0" + string;
	return string;
}



/// Exercise:
/// 1. Recursion
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false