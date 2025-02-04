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
        document.write(`Grade ${grade}=${letter_grade}<br><br>`);
    }else if (grade >= 60 && grade < 68){
        letter_grade = 'D'
        document.write(`Grade ${grade}=${letter_grade}<br><br>`);
    }else if (grade >= 68 && grade < 80){
        letter_grade = 'C'
        document.write(`Grade ${grade}=${letter_grade}<br><br>`);
    }else if (grade >= 80 && grade < 88){
        letter_grade = 'B'
        document.write(`Grade ${grade}=${letter_grade}<br><br>`);
    }else if (grade >= 88 && grade < 100){
        letter_grade = 'A'
        document.write(`Grade ${grade}=${letter_grade}<br><br>`);
    }
}