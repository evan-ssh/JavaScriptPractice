"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    const nameField = getElement("#name");
    const cardField = getElement("#ccnumber");
    const expField = getElement("#expdate");
    const securityField = getElement("#securitycode");
  

    // attach invalid event handlers

    const fields = [nameField,cardField,expField,securityField]
    form.noValidate = true;
    fields.forEach(field => {
        field.addEventListener("invalid", evt => {
            field.nextElementSibling.textContent = field.validationMessage;
        });
    })
   
    form.addEventListener("submit", (evt) =>{
        // handle submit event  fields.forEach(field => {
        fields.forEach(field => {
                field.nextElementSibling.textContent = "";
                field.setCustomValidity("");});

        if(!nameField.value.trim()){
            nameField.setCustomValidity("Please fill out this field.");
            nameField.nextElementSibling.textContent = nameField.validationMessage;
        }
        if(!cardField.value.trim()){
            cardField.setCustomValidity("Must be 16 digits.");
            cardField.nextElementSibling.textContent = cardField.validationMessage;
        } else if (!/^\d{16}$/.test(cardField.value.trim())) {
            cardField.setCustomValidity("Must be 16 digits.");
            cardField.nextElementSibling.textContent = cardField.validationMessage;
        }

        if(!securityField.value.trim()){
            securityField.setCustomValidity("Must be 3 digits.");
            securityField.nextElementSibling.textContent = securityField.validationMessage;
        }else if (!/^\d{3}$/.test(securityField.value.trim())) {
            securityField.setCustomValidity("Must be 3 digits.");
            securityField.nextElementSibling.textContent = securityField.validationMessage;
        }

        
        if(!expField.value.trim()){
            expField.setCustomValidity("Must be a future date in the MM/YY format.")            
        } else if (!/^\d{2}\/\d{2}$/.test(expField.value.trim())) {
            expField.setCustomValidity("Must be a future date in the MM/YY format.");
            expField.nextElementSibling.textContent = expField.validationMessage;
        } else {
            const monthYear = expField.value.split("/");
            const expiryMonth = parseInt(monthYear[0]);
            const expiryYear = 2000 + parseInt(monthYear[1]); 
            const expiryDate = new Date(expiryYear,expiryMonth - 1, 1);
            const now = new Date();
            now.setDate(1);
            now.setHours(0,0,0,0);
            if (expiryDate <= now) {
                expField.setCustomValidity("Must be a future date in the MM/YY format.");
                expField.nextElementSibling.textContent = expField.validationMessage;
            }
        }
        if(!form.checkValidity()){
            evt.preventDefault();
        }
    });
});