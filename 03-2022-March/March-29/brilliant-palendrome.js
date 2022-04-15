function isPalendrome (str) {
    for (i=0; i<str.length; i++){
        if (str[i] !== str[str.length-(i + 1)]) {
            return false;
        };
    };
    return true;
};

console.log(isPalendrome("noon"));
console.log(isPalendrome("horse"));
console.log(isPalendrome("racecar"));