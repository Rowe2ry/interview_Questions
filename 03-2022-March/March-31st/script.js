/* 
 * Write a function that takes in an array of numbers and outputs the average of all the numbers.
 * Ex:
 * Input: [ 1 , 4 , 7 ]
 * Output: 4

 * Input: [ 10, 5 ]
 * Output: 7.5

 * Input: [ 1.5, 3, 2.5, 1 ]
 * Output: 2 
 */

// define the function as one who takes in array
function myAverage (arr) {
    // create a starting point for a running sum on local scope
    var arraySum = 0;
    // iterate through each value in the array
    for (i = 0; i < arr.length ; i++) {
        // add each array value to the total
        arraySum += arr[i];
    };
    // divide the running total by the length of the array and return the number
    return arraySum / arr.length
};

console.log(myAverage([ 1 , 4 , 7 ])); // expected: 4

console.log(myAverage([ 10, 5 ])); // expected: 7.5

console.log(myAverage([ 1.5, 3, 2.5, 1 ])); // expected: 2