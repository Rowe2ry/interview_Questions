//Please build a node application that will take in a user input about their hobbies and then have it saved into a separate file!

const fs = require('fs'); // to handle the file system
const inquirer = require('inquirer'); // to communicate with the user through the command line

inquirer.prompt([
    {
        type: 'input',
        name: 'introduction',
        message: 'Hi! I\'m node.js :) What is your name?'
    },
    {
        type: 'input',
        name: 'hobbies',
        message: 'What are your favorite hobbies?'
    }
])
.then((answers) => { // wait for the user to respond, and with their info...
    fs.appendFile('hobbies.txt', `${answers.introduction} says he enjoys ${answers.hobbies} \n`, (err) => 
        err ? console.log(err) : console.log(`Thank you ${answers.introduction} your information is valuable to us, so we have recorded it.`))
});