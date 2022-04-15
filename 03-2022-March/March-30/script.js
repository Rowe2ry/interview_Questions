/* Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.


Ex:
Input: "the quick brown fox jumps over the calm kitten quietly"
Output: "b"

Input: "this hat is the greatest!"
Output: "g"

Input: "what a wonderful day it has been!"
Output: "o" */

function noDuplicates (str) {
    var inputStringArray = str.split('');
    for (i = 0; i < str.length; i++) {
        tempStringArray = inputStringArray;
        var placeholder = tempStringArray[i]
        tempStringArray.splice(i,1);
        if (!tempStringArray.includes(placeholder)){
            return placeholder;
        };
    };
};

console.log(noDuplicates("the quick brown fox jumps over the calm kitten quietly")); // expected "b"

console.log(noDuplicates("this hat is the greatest!")); // expected "g"

console.log(noDuplicates("what a wonderful day it has been!")); // expected "o"

/* instructor solution

function RetrieveFirstNonRepeat(str) {
	// Empty object to store the value in.
	var charObject = {};
	// For loop through a string
	for (var i = 0; i < str.length; i++) {
		// Grab each indv. letter of the char
		var char = str[i];

		// If char exists, add to one on the value
		if (charObject[char]) {
			charObject[char]++;
		} else {
			// else, since it  doesn't exist, make a property with the key of the letter and the value of 1
			charObject[char] = 1;
		}
	}

	// FOR...IN loop that allows us to iterate through an object
	for (var j in charObject) {
		// What's J???
		// console.log(j);
		// console.log(charObject[j])
		// If the key of the object contains the value of 1, return that value
		if (charObject[j] === 1) {
			// return will stop the execution of the code and have that value be the output of the function.
			return j;
		}
	}
}

console.log(
	RetrieveFirstNonRepeat(
		'the quick brown fox jumps over the calm kitten quietly'
	)
);

*/