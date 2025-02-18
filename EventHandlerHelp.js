/*
An event handler for DOM Content Loaded
*/

document.addEventListener("DOMContentLoaded", () => {
    $("#subtotal").focus();
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);
});