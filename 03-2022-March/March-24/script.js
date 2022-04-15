//Given integer input -> givenInput | runningTotal ->output

function summationEquation (baseInteger) {
	var runningTotal = 0;

	for ( var i = 1; i <= baseInteger; i++) {
	runningTotal += i;
	}

	return runningTotal;
};

console.log(summationEquation(2)); // expected output 3
console.log(summationEquation(4)); // expected output 10
console.log(summationEquation(10)); // expected output 55