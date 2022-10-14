"use strict";
(function(){
    // Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

    function multiplyBy5(inputNum) {
        if(typeof inputNum !== "number"){
            console.log("This is not a number");
            return 0;
        } else {
            return inputNum * 5;
        }
    }

    const multFive = (x) => {
        if (parseFloat(x) !== x){
            return 0
        }
        return x*5
    }

    function numMultipliedFive(){
        let typeNum = Number(prompt("what is your num?"));
        if(isNaN(typeNum)){
            alert("0");
        } else {
            alert(typeNum * 5);
        }
    }
    numMultipliedFive();

    console.log(multFive(5));
    console.log(multFive('5'));
    console.log(multFive('five'));
    console.log(multFive(true));
    console.log(multFive(5.5));

    // Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
    //
    //     EX:
    // inBetween(1, 10, 5) returns true
    // inBetween(25, 26, 25) returns false
    // inBetween(0, 1, 0.5) returns true

    function inBetween(min, max, num){
        // let boolean;
        // if(num < max && num > min){
        //     // boolean = true;
        //     // return boolean;
        //     return true;
        // }else{
        //     return false;
        // }

        // console.log(num < max);
        return num < max && num > min;

    }

    // console.log(inBetween(5, 10, 7))
    console.log(inBetween(5, 10, 10))

})();