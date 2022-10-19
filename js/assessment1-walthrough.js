
function isString(input){
    return typeof input === "string";
}
function lowerCase(input){
    if(typeof input === "string"){
        return input.toLowerCase();
    }
    return false;
}

function isAllLowerCase(str) {
    return str.toLowerCase() === str;
    if(isString(str)) {
        return str.toLowerCase();
    }
    return false;
}

function isAllUpperCase(str) {
    return typeof str === "string" && str === str.toUpperCase();
}

function isNotPalindrome(str) {
    if(typeof str === "string") {
    let arr = str.split("");
    // console.log(arr);
    arr = arr.reverse();
    // console.log(arr);
    // console.log(arr.join(""));
    return arr.join("").toLowerCase() !== str.toUpperCase();
    }
    return true;
}

// used in later functions
function isNumeric(input) {
    return !isNaN(parseFloat(input));
}

function multiplyBy2(input) {
    if(isNumeric(input)) {
        return input * 2
    }
    return false
}

function convertHourToSec(hours) {
    if(isNumeric(hours) && hours >= 0) {
        return hours * 60 * 60
    }
    return false;
}

function getLowestNumber(num1, num2, num3) {

    if(isNumeric(num1) && isNumeric(num2) && isNumeric(num3)) {
        return Math.min(num1, num2, num3);
    }
    return false;
}

function addStringLengths(str1, str2) {
    is(isString(str1) && isString(str2)); {
        return str1.length + str2.length
    }
    return false;
}

function subtract(num1, num2) {
    if(isNumeric(num1) && isNumeric(num2)) {
        return num1 - num2;
    }
    return false
}

//two inputs, (totalPaid, totalCost)
//both inputs must be numeric
//return string format ($x.xx) with 2 decimal points
//return false if either input is not numeric

function calculateChange(totalPaid, totalCost) {
    if(isNumeric(totalPaid) && isNumeric(totalCost)) {
        return `$${(totalPaid - totalCost).toFixed(2)}`
    }
    return false

}
