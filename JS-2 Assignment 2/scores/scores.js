"use strict";

const getElement = selector => document.querySelector(selector);

const displayScores = Students => {   
    const filterValue = Number(getElement("#filter").value);
    const sortValue = getElement("#sort").value;

    let filteredStudents = Students.filter(s => Number(s[2]) >= filterValue);

    if (sortValue === "fname") {
        filteredStudents.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (sortValue === "lname") {
        filteredStudents.sort((a, b) => a[1].localeCompare(b[1]));
    } else if (sortValue === "score") {
        filteredStudents.sort((a, b) => Number(b[2]) - Number(a[2]));
    }

    let displayStr = "";
    for (let i = 0; i < filteredStudents.length; i++) {
        displayStr += filteredStudents[i][0] + ", " + filteredStudents[i][1] + ": " + filteredStudents[i][2] + "\n";
    }
    getElement("#score_list").value = displayStr;

 
    let total = 0;
    for (let i = 0; i < filteredStudents.length; i++) {
        total += Number(filteredStudents[i][2]);
    }
    let avg = "0.00";
    if (filteredStudents.length > 0) {
        avg = (total / filteredStudents.length).toFixed(1);
    }
    getElement("#avg").textContent = avg;
};

document.addEventListener("DOMContentLoaded", () => {
    let Students = [];
    getElement("#add_score").addEventListener("click", () => {   
        const name = getElement("#first_name").value.trim();
        const lname = getElement("#last_name").value.trim();
        const score = getElement("#score").value.trim();
        if(!isNaN(score) && name && lname && score !== "") {
            Students.push([name, lname, score]);
            displayScores(Students);
            getElement("#first_name").value = "";
            getElement("#last_name").value = "";
            getElement("#score").value = "";
        }
    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        Students.length = 0;
        displayScores(Students);
        getElement("#first_name").value = "";
        getElement("#last_name").value = "";
        getElement("#score").value = "";
    });

    getElement("#sort").addEventListener("change", () => {
        displayScores(Students);
    });
    
    getElement("#filter").addEventListener("change", () => {
        displayScores(Students);
    });

    // Default sort by last name
    getElement("#sort").value = "lname";
    displayScores(Students);
    getElement("#first_name").focus();
});