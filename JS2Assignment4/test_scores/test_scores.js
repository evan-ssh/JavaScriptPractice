"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const testScores = new TestScores();

    getElement("#add_score").addEventListener("click", () => {
        getElement("#add_score").nextElementSibling.textContent = "";  
        
        const score = parseFloat(getElement("#score").value);
        if (!validation.isInRange(score, 0, 100)) {
            const msg = "Score must be from 0 to 100."; 
            getElement("#add_score").nextElementSibling.textContent = msg; 
        }
        else { 
            
            testScores.add(score);
            getElement("#all").textContent = testScores.toString();
            getElement("#grades").textContent = testScores.toLetterString();
            getElement("#avg").textContent = testScores.avg.toFixed(2);
            getElement("#sort").textContent = testScores.toSortedString();
        }
        getElement("#score").value = "";
        getElement("#score").focus(); 
    });
    getElement("#score").focus();
});