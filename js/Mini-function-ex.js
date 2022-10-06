"use strict"
// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive(){
    return 5
};

console.log(returnFive());

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive(num){
    // return num === 5 || num === '5';
    return num == 5

};

console.log(isFive('5'));
console.log(isFive(5));
console.log(isFive(5.5));
console.log(isFive('5.0'));


// how many inputs should the function have?
//1
// what are the data types for the inputs?
//number or string
// what is the data type of the output/return value?
//boolean


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// function isShortWord(input) {
//     let output = input.length < 5;
//     return output;
// };

const isShortWord = (string) => string.length < 5;


// how many inputs?
//1
// what data type for inputs?
//string
// what is the return type?
//boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// function isSameLength(word, word2) {
//     let sameLength = (word.length == word2.length);
//     return sameLength;
// };

function isSameLength(str1, str2) {
    return str1.length === str2.length;
}

console.log(isSameLength('you', 'me'))
// How many inputs?
//2
// What type of input?
//string, string
// What type of output?
//boolean