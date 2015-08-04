// When call the function, it must use "()"
// 

// Array
var array1 = [];
var array2 = [1, 2, 3, 4, 5];

array1.push("Mack");
array1.push("the", "Knife");
console.log(array1);

console.log(array1.join(" "));
console.log(array1.pop());
console.log(array1);

// Object
// You can access object property with . or ['name']
var day1 = {
	squirrel: false,
	events: ['work', 'touched tree', 'pizza',
					 'running', 'television']
};
console.log(day1.squirrel);
console.log(day1.wolf);													// undefined
day1.wolf = false;
console.log(day1.wolf);													// false


// Remove property
var anObject = {left:1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);											// undefined

// Check property is existed in object or not
console.log("left" in anObject);								// false
console.log("right" in anObject);								// true

// Compare object
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
console.log(object1 == object2);								// true
console.log(object1 == object3);								// false
object1.value = 15;
console.log(object2.value);											// 15


// Map
var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);										// true
console.log(map["touched tree"]);								// -0.081


// Iterate property in object / map
for (var event in map) {
	console.log("The correlation for '" + event + "' is " + map[event]);
}

function arguementCounter() {
	console.log("You gave me", arguments.length, "arguments.");
}
arguementCounter("Straw man", "Tautology", "Ad hominem");

// addEntry version 1
journal = [];
var day1 = {
	squirrel: false,
	events: ['work', 'touched tree', 'pizza',
					 'running', 'television']
};
function addEntry(events, didITurnToAAquirrel) {
	journal.push({events: events, squirrel: didITurnToAAquirrel});
}
addEntry(["work", "touched tree", "pizza", false]);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// addEntry version 2
function addEntry(squirrel) {
	var entry = {events: [], squirrel: squirrel};
	for (var i = 1; i < arguments.length; i++) {
		entry.events.push(arguements[i]);
	}
	journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza");



// Exercise
// #1: List
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// #2: Deep compare object
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
