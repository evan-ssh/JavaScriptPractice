
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