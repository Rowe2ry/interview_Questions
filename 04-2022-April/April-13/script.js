// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

const theWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let userInput = process.argv[2];

userInput == NaN ? console.log('Please input a number for this program') : userInput-- ;

thatDay = theWeek[userInput];

console.log(thatDay);