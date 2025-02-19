const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const amount = parseInt($("amount").value);
    if(isNaN(amount) || amount< 0 || amount > 99) {
        alert("Amount must be a valid number between 0 and 99");
        $("amount").focus();
    } else {
        makeChange(amount);
    }
}:

