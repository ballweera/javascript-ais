var ball = {name:'ball', isProgrammer:true};
var ballClone = ball;
var ballCopy = {name:'ball', isProgrammer:true};
var jib = {name:'jib', isProgrammer:false};
var civic1 = {name: 'civic', myProperties: {color: 'white', isHybrid: true}};
var civic2 = {name: 'civic', myProperties: {color: 'white', isHybrid: true}};

console.log(deepEqual(2, 2));
console.log(deepEqual(null, null));
console.log(deepEqual(ball, ballClone));
console.log(deepEqual(ball, ballCopy));
console.log(deepEqual(ball, jib));
console.log(deepEqual(1, "1"));
console.log(deepEqual(civic1, civic2));

function deepEqual(objA, objB) {
	if (objA === objB) return true;

	if (objA == null || typeof objA != 'object'
			|| objB == null || typeof objB != 'object') {
		return false;
	}

	var propsInObjA = 0, propsInObjB = 0;
	for (var prop in objA)
		propsInObjA += 1;

	for (var prop in objB) {
		propsInObjB += 1;
		if (!(prop in objA) || !deepEqual(objA[prop], objB[prop]))
			return false;
	}

	return propsInObjA == propsInObjB;
}