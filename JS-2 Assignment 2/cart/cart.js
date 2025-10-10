"use strict";

function getLineItems() {
    const lineItems = [];
    lineItems.push(["HTML", 54.5, 5]);
    lineItems.push(["Python Data Analysis", 59.50, 2]);
    lineItems.push(["1984", 15.0, 1]);
    lineItems.push(["Dune", 20.0, 3]);
    return lineItems;
}

function makeCol(text) {
    const col = document.createElement("td");
    const textNode = document.createTextNode(text);
    col.appendChild(textNode);
    return col;
}

function addRow(lineItem) {
    let lineTotalAmount = 0;
    const descr = lineItem[0];
    const price = lineItem[1];
    const quantity = lineItem[2];
    const lineTotal = price * quantity;
    lineTotalAmount += lineTotal;

    const table = document.querySelector("table");
    const row = document.createElement("tr");

    row.appendChild(makeCol(descr));
    row.appendChild(makeCol("$" + price));
    row.appendChild(makeCol(quantity));
    row.appendChild(makeCol(lineTotal));

    table.appendChild(row);
}

function addSummaryRow(lineItems,lineTotalAmount) {
    // calculate total quantity and amount here

    const table = document.querySelector("table");
    const row = document.createElement("tr");

    let totalQty = 0;
    let totalPrice = 0;
    let totalAmount = 0;
    lineItems.forEach(item => {
        totalPrice += item[1]
        totalQty += item[2]
        totalAmount += item[1] * item[2]
        
         
    });
    
    row.appendChild(makeCol("TOTAL"));
    row.appendChild(makeCol(""));
    row.appendChild(makeCol(totalQty));
    row.appendChild(makeCol(`$${totalAmount}`));

    table.appendChild(row);
}

document.addEventListener("DOMContentLoaded", () => {
    // get line items
    const lineItems = getLineItems();

    // display line items
    //for (let lineItem of lineItems) {
    //    addRow(lineItem);
    //}
    lineItems.sort()
    lineItems.forEach(lineItem =>{
        addRow(lineItem)
    })

    // add summary row
    addSummaryRow(lineItems);
});