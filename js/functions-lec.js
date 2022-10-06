// "use strict";
//
// (function(){
// // Function - a reuseable block of code that performs a specified task, usually taking an input and producing an output
//
// //functions we've been exposed to
// //console.log()
// //prompt()
// //alert()
// //confirm()
// //.startsWith()
// //.endWith()
// //Number() - constructor
//
// //can accept number of arguments.
// //someFunctions(arguments)
//
// // Arguments are optional
// // prompt("What did you have for breakfast?")
//
// // Storing the return value of the prompt to our variable named littleMermaid
//
// //let littleMermaid = prompt("How many days did you rent Little Mermaid for?")
//
// // EXECUTING FUNCTIONS - DEFINITIONS VS EXPECTATIONS
//
// // Definitions is calling the name of the functions without ()
//     console.log(parseInt)
// // Performing the function when used with ()
//     console.log(parseInt("11"));
//
//
// //Defining Functions
// // Arguments are values we pass to a function when executing.
// // Parameters are placeholders for our function definition.
//     function add(num, num2) {
//         // return the output of num = num2
//         return num = num2;
//     }
//
//     console.log(add('5', '5'));
//     let 10
//     = add(3, 7);
//
//     console.log(ten);
//
//
// // Arrows Function Expression
//     const addition = (num, num2) => num + num2;
//
//     console.log(addition(6, 4));
//
// // Executing a function with function arguments.
//     console.log(add(5, 6), add(10, 7));
//
//
//     function add(num, num2) {
//         // return the output of num, num2
//         console.log("Finished the function!")
//         return num, num2;
//         // unreachable code
//         console.log("Finished the function execution!")
//         return num, num2;
//     }
//
//     //Anonymous Functions
//     let increment
//     -function (x) {
//         return x = 1
//     };
//
//     let two = increment(1)
//
//     console.log(addition(two, 6));
//
//     function shout(message) {
//         alert(message.toUpperCase() + "!!!")
//     }
//
//     shout("codeup");
//
//     console.log(shout('codeup'))
//
//     let globalVar = "Hello, Im Global!";
//
//     function test() {
//         let localVar = "Hello, I'm local!"
//         console.log(globalVar);
//         console.log(localVar)
//     }
//
//     let x = 300;
//     let y = 100;
//
//     function scopeExample() {
//         let x = 1;
//         let y = 2;
//         console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
//         return x + y;
//     }
//
//     console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
//     let returnValue = scopeExample();
//     console.log(returnValue); // 3
//
// })();