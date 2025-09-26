"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    const nameField = getElement("#name");
    const cardField = getElement("#ccnumber");
    const expField = getElement("#expdate");
    const securityField = getElement("#securitycode");
    const submitBtn = getElement("#save");
    const fields = [nameField,cardField,expField,securityField]

    fields.forEach(field => {
        field.addEventListener("invalid", evt => {
            field.nextElementSibling.textContent = field.validationMessage;
        });
    form.noValidate = true;
    // attach invalid event handlers
    let valid = true;
    submitBtn.addEventListener("click", (evt) =>{

    })
    form.addEventListener("submit", evt => {
        // handle submit event
    });

});