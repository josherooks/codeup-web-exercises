console.log(Math.pow(2, 4));
console.log(2 ** 4);

//global variable
var global = "this is a global var";
console.log(global)
let globalVar = "this is still a global variable";
if(2 == true){
    //global variable
    var str = "2 is equal to true"
    let str2 = "this is my let variable"
    globalVar;
}

console.log(str);
// console.log(str2)



function sayHello(){
    //not global;
    var hello = "hey dude";
    global = "the earth is flat";
    console.log(global)
    return hello;
}


//arrow function
const sayHelloArrowFunction = (name = "bill the destroyer") => {
    return `hey there ${name}`;
}

console.log(sayHelloArrowFunction())



console.log(global);


console.log(sayHello());

// console.log(hello);


let name = "bill";
//using concat
// console.log("Hi " + name + ".")

//using template string
console.log(`hi ${name}.`)

let games = ["DMC", "GOW", "Minecraft", "Roblox", "Tekken 7"];

for (let game of games) {
    console.log(game);
}


const person = {
    name,
    global,
    height: 6
}

// let deconstructName = person.name;
// let deconstructGlobal = person.global;
// console.log(deconstructGlobal)
// console.log(deconstructName)

const {height} = person;
console.log(height);

const [game1, game2, g3, g4, g5] = games;
console.log(game1);
console.log(game2);