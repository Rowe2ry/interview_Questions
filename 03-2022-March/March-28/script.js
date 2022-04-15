/* Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
*/

function vowelCounter (str) {
    var vowelNumber = 0;
    var inputLowercase = str.toLowerCase();
    var vowelList = "aeiou";
    for (i=0; i<inputLowercase.length; i++){
        var compareInput = inputLowercase[i];
        for (j=0; j < vowelList.length; j++){
            var compareVowel = vowelList[j];
            if (compareVowel == compareInput) {
                vowelNumber++;
            };
        };
    };
    return vowelNumber;
};

console.log(vowelCounter('hello'));

console.log(vowelCounter('you are great'));

console.log(vowelCounter('why'));