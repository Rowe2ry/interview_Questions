// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

const moment = require ('node_modules/moment');

let userInput = process.argv[2];

userInput === 7 ? console.log('Please input a number for this program') : userInput = 0 ;

thatDay = moment(userInput, 'd').format('dddd');

console.log(thatDay);