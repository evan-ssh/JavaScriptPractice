"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero less than 10000`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);
    
    if (isNaN(subtotal) || miles <= 0 || miles >= 10000) {
        alert(getErrorMsg("Subtotal"));
        focusAndSelect("#subtotal");
    } else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert(getErrorMsg("Tax Rate"));
        focusAndSelect("#tax_rate");
    } else {
        $("#sales_tax").value = (subtotal * taxRate / 100).toFixed(2);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#subtotal").focus();
});

