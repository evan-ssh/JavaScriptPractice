"use strict";

const scores = [];

const $ = selector => document.querySelector(selector);


const addScore = () => {
    const score = parseInt($("#score").value);
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
        $("#score").value = "";
        $("#average").value = calculateAverage();
    }
    else {
        alert("Score must be a valid number from 0 through 100");
    }
    $("#score").focus();
};

const calculateAverage = () => {
    let total = 0;
    for (let num of scores) {
        total += num;
    }
    return parseInt(total / scores.length);
};

document.addEventListener("DOMContentLoaded", () => {
    $("#add").addEventListener("click", addScore);
    $("#score").focus();
});
