const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const cents = parseInt($("#cents").value);
    if(isNaN(cents) || cents < 0 || cents > 99) {
        alert("Amount must be a valid number between 0 and 99");
        focusAndSelect("#cents");
    } else {
        makeChange(cents);
    }
};

const makeChange = cents => {
    const quarters = parseInt(cents / 25);
    cents = cents % 25;
    const dimes = parseInt(cents / 10);
    cents = cents % 10;
    const nickels = parseInt(cents / 5);
    const pennies = cents % 5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
}

document.addEventListener("DOMContentLoaded", () => { 
    $("#calculate").addEventListener("click", processEntry);
    $("#cents").focus();
});