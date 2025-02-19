const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const amount = parseInt($("amount").value);
    if(isNaN(amount) || amount< 0 || amount > 99) {
        alert("Amount must be a valid number between 0 and 99");
        $("amount").focus();
    } else {
        makeChange(amount);
    }
};

const makeChange = amount => {
    const quarters = parseInt(amount / 25);
    amount = amount % 25;
    const dimes = parseInt(amount / 10);
    amount = amount % 10;
    const nickels = parseInt(amount / 5);
    const pennies = amount % 5;

    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
};

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
}

document.addEventListener("DOMContentLoaded", () => { 
    $("calculate").addEventListener("click", processEntry);
    $("amount").focus();
});