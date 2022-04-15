/* =========================================================================
 * Write a function that takes in an array of integers and the array with duplicates removed
 *
 * Ex:
 * Input: [1,2,2,3]
 * Output: [1,2,3]
 *
 * Input: [4,5,4,4,7,5]
 * Output: [4,5,7]
 *
 * Input: [1,2,3,5]
 * Output: [1,2,3,5] 
 * ========================================================================= */

// const removeDuplicates = arr => {  DID NOT WORK, INSTRUCTOR SOLUTION BELOW
//         let newArray = arr;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 if (newArray[i] == newArray[j]) {
//                     newArray[j] == "x";
//                 }
//             }
//         };
//     };
//     for (let i = 0; i < newArray.length ; i++) {
//         if (newArray[i] === "x") {
//             newArray = newArray.slice(i,1);
//         }
//     };
//     return newArray;
// };

// filter method puts the value in the new array each time the
// cb returns true, and will omit for return false
const removeDuplicates = (arr) => {
    const newArray = arr.filter((num, index) => {
        // .indexOf() returns the first index number where the element exists in an array
        return arr.indexOf(num) === index; // if the first time this value shows up is this time, let it thru, otherwise false
    });
    return newArray;
};

console.log(removeDuplicates([1,2,2,3])); // [1,2,3]

console.log(removeDuplicates([4,5,4,4,7,5])); // [4,5,7]

console.log(removeDuplicates([1,2,3,5])); // [1,2,3,5]