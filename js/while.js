"use strict";

let num = 1;
while(num < 65536){
    console.log(num *= 2);
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
do{
    let soldCones = Math.floor(Math.random() * 5) + 1;
    if(soldCones <= allCones) {
        console.log('${soldCones} cones sold... ')
    }else{
        console.log("Cannot sell you " + soldCones + "cones I only have " + allCones)
        allCones -= soldCones;
    }
}while(allCones !== 0)
console.log("Yay! I sold them all!")

