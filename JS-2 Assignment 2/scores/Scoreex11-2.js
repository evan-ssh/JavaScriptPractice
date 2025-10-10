"use strict";

const getElement = selector => document.querySelector(selector);

const displayScores = Students => {   
    // filter scores
    const scores = Students.filter(elem => elem[3]);
    console.log(scores)
// evenNumbers is [2, 4, 6, 8, 10

    // sort filtered scores
    // sort by the first score in ascending order
students.sort((a, b) => a[0] - b[0])

    // get total of filtered scores and build display string


    // calculate the average 
  

    // display 
};

document.addEventListener("DOMContentLoaded", () => {
    let Students = [];
    getElement("#add_score").addEventListener("click", () => {   
        const name = getElement("#first_name").value;
        const lname = getElement("#last_name").value;
        const score = getElement("#score").value;
        Students.push([name,lname,score]);
    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        
    });

    getElement("#sort").addEventListener("change", () => {
        
    });
    
    getElement("#filter").addEventListener("change", () => {
        
    });

    // set focus on first text box on load
    getElement("#first_name").focus();
});