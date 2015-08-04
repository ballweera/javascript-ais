// Function that operate on other function, either by
// taking them as arguements or by returning them,
// are called 'higher-order functions'
// 
// Higher-order function allow us to abstract over actions,
// not just values. They come in several forms.
// for example, you can have functions that create
// new functions.
// 

function greaterThan(n) {
	return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


// JSON: JavaScript Object Notation
{
	"name": "Weera Kasetsin",
	"sex": "M",
	"born": 1977
}

var string = JSON.stringify({name: 'X', born: 1980});
console.log(string);
console.log(JSON.parse(string).born);