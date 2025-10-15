"use strict";

const getElement = selector => document.querySelector(selector);

const displayScores = Students => {   

    const filterValue = getElement("#filter").value; // "all", "80", "90"
    const sortValue = getElement("#sort").value;

    let filteredStudents = Students;
    if (filterValue !== "all") {
        filteredStudents = filteredStudents.filter(s => Number(s[2]) >= Number(filterValue));
    }

    filteredStudents = [...filteredStudents];
    if (sortValue === "first") {
        filteredStudents.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (sortValue === "last") {
        filteredStudents.sort((a, b) => a[1].localeCompare(b[1]));
    } else if (sortValue === "score") {
        filteredStudents.sort((a, b) => Number(b[2]) - Number(a[2]));
    }

   
    let displayStr = "";
    for (let i = 0; i < filteredStudents.length; i++) {
        displayStr += "<tr><td>" + filteredStudents[i][0] + "</td><td>" + filteredStudents[i][1] + "</td><td>" + filteredStudents[i][2] + "</td></tr>";
    }
    getElement("#scores_tbody").innerHTML = displayStr;

    let total = 0;
    for (let i = 0; i < filteredStudents.length; i++) {
        total += Number(filteredStudents[i][2]);
    }
    let avg = 0;
    if (filteredStudents.length > 0) {
        avg = (total / filteredStudents.length).toFixed(2);
    }
    getElement("#average_score").textContent = avg;
};

document.addEventListener("DOMContentLoaded", () => {
    let Students = [];
    getElement("#add_score").addEventListener("click", () => {   
        const name = getElement("#first_name").value;
        const lname = getElement("#last_name").value;
        const score = getElement("#score").value;
        if(!isNaN(score) && name && lname){
            Students.push([name,lname,score]);
            displayScores(Students);
        }
    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        Students.length = 0;
        displayScores(Students);
    });

    getElement("#sort").addEventListener("change", () => {
        displayScores(Students);
    });
    
    getElement("#filter").addEventListener("change", () => {
        displayScores(Students);
    });

    getElement("#sort").value = "last";
    displayScores(Students);
    getElement("#first_name").focus();
});