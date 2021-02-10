let myObject = {
    name: "chair",
    legs: 4,
    color: "black",
    seat: true
}

let string = `This is a ${myObject.name}, it is ${myObject.color} and the number of legs it has is ${myObject.legs}. Does it have a seat? I say ${myObject.seat}`

console.log(string)

// this is the control flow
for (let num = 0; num <= 10; num++){

}

let number = 1
while(number < 11){
    console.log(number++)
}

let number1 = 0
do {
    console.log(number1)
    number1++
} while (number1 < 11);

function greet(greeting){
    console.log(greeting)
}

let fruit = [
    {
        name: "Apple",
        cost: 1
    },
    {
        name: "Orange",
        cost: 2
    },
    {
        name: "Banana",
        cost: 3,
        ripe: true
    }
]

fruit[0].name
fruit[0]["name"]
console.log(fruit[0]);

greet("baby come back.. you can blame it all on me")

// let userInput = window.prompt("Pick and action and an option; Actions; (G)o, (L)ook;")
// userInput = userInput.split(" ")
// let userAction = userInput[0]
// let userOption = userInput[1]
// let playing = true

// while (playing) {
    
// }

// switch (userAction) {
//     case "g":
//     case "G":
//     case "GO":
//     case "Go":
//     case "gO":
//     case "go":
//         move(userOption)
        
//         break;
//     case "look":
//         console.log("You look around or something")
//         break;
//     case "q":
//         playing = false
//         console.log("Thanks for playing our super cool complicated game")
//         break;

//     default:
//         console.log("I dont know")
// }

// function move(direction) {
//     console.log("You move to the ", direction)
// }

