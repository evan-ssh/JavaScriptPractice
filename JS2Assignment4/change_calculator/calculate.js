"use strict";

const clearForm = () => {
    document.querySelector("#cents").value = "";
    document.querySelector("#quarters").value = "";
    document.querySelector("#dimes").value = "";
    document.querySelector("#nickels").value = "";
    document.querySelector("#pennies").value = "";
    document.querySelector("#cents").focus();
};

const changeCalculator = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,

    validate(cents) {
        return !isNaN(cents) && cents >= 0 && cents <= 99;
    },

    calculate(cents) {
        this.quarters = Math.floor(cents / 25);
        cents = cents % 25;
        this.dimes = Math.floor(cents / 10);
        cents = cents % 10;
        this.nickels = Math.floor(cents / 5);
        this.pennies = cents % 5;
    },

    display() {
        document.querySelector("#quarters").value = this.quarters;
        document.querySelector("#dimes").value = this.dimes;
        document.querySelector("#nickels").value = this.nickels;
        document.querySelector("#pennies").value = this.pennies;
    }
};

const calculateChange = () => {
    let cents = Math.floor(parseInt(document.querySelector("#cents").value));

    if (!changeCalculator.validate(cents)) {
        alert("Please enter a valid number between 0 and 99");
        document.querySelector("#cents").select();
    } else {
        changeCalculator.calculate(cents);
        changeCalculator.display();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#calculate").addEventListener("click", calculateChange);  
    document.querySelector("#clear").addEventListener("click", clearForm);     
    document.querySelector("#cents").focus();     
});