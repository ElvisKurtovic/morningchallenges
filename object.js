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

greet("hello")