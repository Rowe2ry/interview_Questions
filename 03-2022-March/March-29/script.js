function isPalendrome(word) {
    // console.log("function started and wor is: " + word)
    wordContents = word.split("");
    // console.log('word as an array is: ' + wordContents)
    wordContentsReversed = [];
    for (i = 0; i < wordContents.length; i++){
        // console.log("Loop iteration " + (i + 1));
        var thisCharacter = wordContents[i];
        // console.log('examining ' + thisCharacter);
        wordContentsReversed.unshift(thisCharacter);
        // console.log('the reverse array is: ' + wordContentsReversed)
    };
    var wordReversed = wordContentsReversed.join('');
    // console.log('the word reversed is: ' + wordReversed)
    if (word == wordReversed) {
        return true;
    } else {
        return false;
    };
};

console.log("for the word \"cake\" being a palendrome is " + isPalendrome("cake")); // false

console.log("for the word \"moon\" being a palendrome is " + isPalendrome("moon")); // false

console.log("for the word \"gohangasalamiimalasagnahog\" being a palendrome is " + isPalendrome('gohangasalamiimalasagnahog')); // true