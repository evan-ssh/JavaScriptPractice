"use strict";

function getElement(selector) {
    return document.querySelector(selector);
}  

function getInvoices() {
    let invoices = [];

    invoices.push(["Murach Books", 100.00, new Date("10/5/2024"), true]);
    invoices.push(["Savemart", 200.75, new Date("10/8/2024"), false]);
    invoices.push(["Carls Jr.", 150.25, new Date("10/6/2024"), true]);
    invoices.push(["Taco Bell", 85.00, new Date("10/23/2024"), true]);
    invoices.push(["Target", 45.00, new Date("10/01/2024"), false]);

    return invoices;
}

function createCol(text) {
    const col = document.createElement("td");
    const textNode = document.createTextNode(text);
    col.appendChild(textNode);
    return col;
}

function displayInvoices(invoices) {
    const table = getElement("#invoice_table");

    const rows = document.querySelectorAll("#invoice_table tr");
    for (let i = 1; i < rows.length; i++) {
        table.removeChild(rows[i]);
    }

    invoices.forEach(invoice => {
        let tableRow = document.createElement("tr")
        let company = invoice[0]
        let amountDue = invoice[1]
        let dueDate = invoice[2]
        let paidBool = invoice[3]

        tableRow.appendChild(createCol(company))
        tableRow.appendChild(createCol(amountDue.toFixed(2)))
        tableRow.appendChild(createCol(dueDate.toDateString()))
        tableRow.appendChild(createCol(paidBool))
        table.appendChild(tableRow)
    })
}

 
function filterInvoices() {
    const invoices = getInvoices();

    let filtered = invoices.filter(invoice => {
        const invoiceDate = invoice[2];
        const startDate = new Date(getElement("#start_date").value);
        const endDate   = new Date(getElement("#end_date").value);        
        if (isNaN(startDate)) return invoiceDate <= endDate;
        if (isNaN(endDate)) return invoiceDate >= startDate;
        return invoiceDate >= startDate && invoiceDate <= endDate;
    });

    const paidBtn = getElement("#paid");
    const unpaidBtn = getElement("#unpaid");

    if(paidBtn.checked){
        filtered = filtered.filter(invoice => invoice[3] === true)
    }else if (unpaidBtn.checked){
        filtered = filtered.filter(invoice => invoice[3] === false)
    }
    displayInvoices(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    const invoices = getInvoices();
    displayInvoices(invoices);

    getElement("#filter_button").addEventListener("click", filterInvoices);
});