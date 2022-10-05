"use strict";

let greeting = "Hello from external JavaScript";
console.log(greeting);

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
alert('Great my favorite color is ' + userInput + ' too!');

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleMermaid = prompt("How many days did you rent Little Mermaid?");
let brotherBear = prompt("How many days did you rent Brother Bear?");
let hercules = prompt("How many days did you rent Hercules?");

let pricePerDay = 3;

let totalPrice = (littleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay);
alert(totalPrice);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay = prompt("How much does Google pay?");
let facebookPay = prompt("How much does Facebook pay?");
let amazonPay = prompt("How much does Amazon pay?");

let googleHours = prompt("How many hours did you work for Google?");
let facebookHours = prompt("How many hours did you work for Facebook?");
let amazonHours = prompt("How many hours did you work for Amazon?");

let payment = ( googlePay * googleHours) + (facebookPay * facebookHours) + (amazonPay * amazonHours);
alert("Your payment is: " + payment);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let isFull = confirm("Is the class full?");
let hasConflict = confirm("Do you have a conflict with schedule?");
alert(!isFull && !hasConflict);

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let itemsBought = prompt("How many items did you buy?");
let offer = confirm("Has the offer expired?");
let isPremium = confirm("Are you a premium member?")

alert((parseFloat(itemsBought) > 2 || isPremium) && !offer);