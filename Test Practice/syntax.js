
// While loops
let i = 0

do {
    console.log(i)
    i ++//i++ is a post-increment operator, increment by 1
}while (i < 5);

do{
    console.log(i)
    i += 2
}while (i < 6);

i = 10;
do {
    console.log(i)
    i --
}while (i > 0)

do { 
    console.log(i)
    i -= 2 // post decrement operator
}while (i > 0)

while (i > 0){
    console.log(i)
    i --
}

while (i > 50){
    console.log(i)
    i ++
}


//If else statments
let grade = 90

if (i < 50){
    console.log("Sorry u did not pass")
}else{
    console.log("Congratulations you passed!")
};

//Grade converter example of if elif else
if (i > 0 && i <= 20){
    console.log("You received a F")
}else if (i > 20 && i <= 40){
    console.log("You received a D")
}else if (i > 40 && i <= 60){
    console.log("You received a C")
}else if (i > 60 && i <= 80){
    console.log("You received a B")
}else if (i > 80 && i <= 100){
    console.log("You received a A")
}else{
    console.log("Invalid grade")
}

//For Loop

// for (initialize counter; condition; what we are updating by){
// code to be ran
//}

for(let i = 1; i <= 30; i ++){
    console.log(i)
}

numbers = [1,2,3,4,5]
for(let num of numbers){
    console.log(num)
}

let number = parseInt(prompt("Enter a number"))
for (let i = 1; i <= number; i++){
    console.log(i)
}

numbers = [1,2,3,4,5,6]
total = 0
for(let num of numbers){
    total += num
}
console.log(total)

///

let numbers = []
let number = parseInt(prompt("Enter a number"))
total = 0
for(let i = 1; i <= number; i++){
    numbers.push(i)
}

for(let num of numbers){
    total += num
}

let number = 10
for(let i = 1; i <= number; i ++){
    if(i % 2 == 0){
        console.log(i)
    }else{
        console.log("Not even")
    }
}

let number = parseInt(prompt("Enter the number"))
let factorial = 1
for(let i = 1; i <= number; i++){
    factorial *= i
}


console.log(factorial)

let number = parseInt(prompt("Enter numbers to generate"))
squares = []
for(let i = 1; i <= number; i++){
    squares.push(i * i)
}
console.log(squares)

console.log(total)
//append to list = push()

let numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)
