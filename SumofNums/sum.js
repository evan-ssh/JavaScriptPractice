'use strict';

let userNum = '';
let goAgain = '';

do {
    userNum = parseInt(prompt("Enter any number to sum\n1-100"), 10);
    if (userNum < 1 || userNum > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        let sum = 0;
        for (let i = 1; i <= userNum; i+=1) {
            sum += i;
        }
        document.write(`The sum of numbers from 1 to ${userNum} is ${sum}<br><br>`);
        goAgain = prompt("Do you want to enter another number? (y/n)");
    }    
} while (goAgain === 'y');