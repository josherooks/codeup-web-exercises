"use strict"

function isOdd(num){
    return num % 2 === 1;
}
console.log(isOdd(2))
console.log(isOdd(3))

function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(2))
console.log(isEven(3))

function identity(input){
    return (input)
}

console.log(identity("yes"))
console.log(identity(5))

const isFive = (input) => parseInt(input) === 5;

console.log(isFive(1))
console.log(isFive(5))
console.log(isFive("5"))
console.log(isFive("five"))

function addFive(input){
    return parseInt(input) + 5
}

console.log(addFive(5))
console.log(addFive("10"))
console.log(addFive("five"))

function isMultipleOfFive(input){
    return input % 5 === 0
}
console.log(isMultipleOfFive(10))
console.log(isMultipleOfFive("10"))
console.log(isMultipleOfFive("five"))
console.log(isMultipleOfFive(4))

function isThree(input){
    return parseInt(input) === 3
}

console.log(isThree(3))
console.log(isThree(2))
console.log(isThree("3"))

function isMultipleOfThree(input){
    return input % 3 === 0
}

console.log(isMultipleOfThree(7))
console.log(isMultipleOfThree(3))
console.log(isMultipleOfThree("9"))

function isMultipleOfThreeAndFive(input){
    return input % 3 ===  0 && input % 5 === 0
}

console.log(isMultipleOfThreeAndFive(17))
console.log(isMultipleOfThreeAndFive(15))
console.log(isMultipleOfThreeAndFive("30"))

function isMultipleOf(target, n){
    return target % n === 0
}

console.log(isMultipleOf(20, 3))
console.log(isMultipleOf(30, 10))

function isTrue(boolean){
    return boolean === true
}

console.log(isTrue(true))
console.log(isTrue(false))

function isFalse(boolean){
    return boolean === false
}

console.log(isFalse(true))
console.log(isFalse(false))

function isTruthy(input){

}


