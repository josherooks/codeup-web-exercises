(function(){
    "use strict";

   function allIndexesOf(array, value){
       let arr = []
       for(let i = 0; i < array.length; i++){
           if(value === array[i]){
               arr.push(i)
           }

       } return arr;
   }
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    console.log(allIndexesOf(fruits, 'apple'))


})();