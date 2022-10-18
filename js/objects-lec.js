"use strict";

// var car = new Object();
// let cup = new Object();
// //below is object literal notation
// let hat = {};
//
//
// console.log(typeof car)
// console.log(typeof cup)
// console.log(typeof hat)
//
// // let book = {};
// // book.title = "Berserk";
// // book.author = " Kentaro Miura";
// // book.title = "Berserk Deluxe vol.4";
// // book["volume"] = 4;
//
// let bookTitle = prompt("Enter book title")
// let book = {
//     title: bookTitle,
//     author: "Kentaro Miura",
//     volume: 4
// };
// console.log(book)
// console.log(book.title)
// console.log(book["title"])


//Nested Values

var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

//Assigning Functionality to an Object

// var car = {};
// car.make = "Toyota";
// car.model = "Camry";
//
// // create a honk method on the car object
// car.honk = function () {
//     alert("Honk! Honk!");
// };
//
// // honk the horn
// car.honk();
// console.log(car)