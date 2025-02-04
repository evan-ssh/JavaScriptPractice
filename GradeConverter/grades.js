'use strict';
let grade = '';
let letter_grade = '';

while (grade != 999) {
    grade = parseInt(prompt("Enter Student's Grade"));
    if (grade < 0 || grade > 100){
        continue;
    }
    if (grade < 60){
        letter_grade = 'F'
        console.log(letter_grade);
    }else if (grade >= 60 && grade < 68){
        letter_grade = 'D'
        console.log(letter_grade);
    }else if (grade >= 68 && grade < 80){
        letter_grade = 'C'
        console.log(letter_grade);
    }else if (grade >= 80 && grade < 88){
        letter_grade = 'B'
        console.log(letter_grade);
    }else if (grade >= 88 && grade < 100){
        letter_grade = 'A'
        console.log(letter_grade);
    }
}