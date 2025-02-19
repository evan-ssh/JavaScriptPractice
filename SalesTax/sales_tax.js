"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} Enter a valid number`

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
}

const clearField = selector => {
    const elem = $(selector);
    elem.value = "";
    focusAndSelect(selector);
};

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);
    
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert(getErrorMsg("Subtotal must be > 0 and < 10000"));
        focusAndSelect("#subtotal");
    } else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert(getErrorMsg("Tax rate must be > 0 and < 12"));
        focusAndSelect("#tax_rate");
    } else {
        const salesTax = subtotal * (taxRate / 100);
        const total = subtotal + salesTax;
        $("#sales_tax").value = salesTax.toFixed(2);
        $("#total").value = total.toFixed(2);
    }
};

const clearAllFields = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").focus();
    focusAndSelect("#subtotal");
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#subtotal").focus();
    $("#clear").addEventListener("click", clearAllFields);
    $("#subtotal").addEventListener("click", () => clearField("#subtotal"));
    $("#tax_rate").addEventListener("click", () => clearField("#tax_rate"));
});