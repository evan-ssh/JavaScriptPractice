const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const priceField = $("#price");
    const rateField = $("#rate");
    const totalPriceField = $("#total");

    $("#calculate").addEventListener("click", () => {
        let validValues = true;
        
        const price = parseFloat(priceField.value);
        if (isNaN(price) || price <= 0) {
            validValues = false;
            alert("The price must be a valid number greater than 0");
        }

        const rate = parseFloat(rateField.value);
        if (isNaN(rate) || rate < 2 || rate > 12) {
            validValues = false;
            alert("The tax rate must be a valid number between 2 and 12");
        }

        if (validValues) {
            const totalPrice = price + (price * rate / 100);
            totalPriceField.value = totalPrice.toFixed(2);
        }
    });

    $("#reset").addEventListener("click", () => {
        priceField.value = "";
        rateField.value = "";
        totalPriceField.value = "";
        priceField.focus();
    });
});