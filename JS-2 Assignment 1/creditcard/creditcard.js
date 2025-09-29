"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    const nameField = getElement("#name");
    const cardField = getElement("#ccnumber");
    const expField = getElement("#expdate");
    const securityField = getElement("#securitycode");
    const submitBtn = getElement("#save");
    // attach invalid event handlers
   

    const fields = [nameField,cardField,expField,securityField]
    form.noValidate = true;
    fields.forEach(field => {
        field.addEventListener("invalid", evt => {
            field.nextElementSibling.textContent = field.validationMessage;
        });
    })
    // attach invalid event handlers
    submitBtn.addEventListener("click", (evt) =>{


        // handle submit event  fields.forEach(field => {
        fields.forEach(field => {
            
                field.nextElementSibling.textContent = "";
                field.setCustomValidity("");
            });
            if(expField.value){
                
                const expDate = new Date(expField.value + "T00:00:00");
                const currentDate = new Date()
                currentDate.setHours(0,0,0,0);
               
                if(expDate <= currentDate){
                    expField.setCustomValidity("Please enter a date in the future.");
                    expField.nextElementSibling.textContent = expField.validationMessage;
                }
                }
            
            if(!form.checkValidity()){
                evt.preventDefault();
            }

         

        });
});