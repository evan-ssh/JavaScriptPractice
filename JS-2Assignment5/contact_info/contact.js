"use strict";

import Contact from './lib_contact.js';

const getElement = selector => document.querySelector(selector);

const clearContact = () => {
    sessionStorage.removeItem("contact");
};

const saveContact = (contact) => {
    sessionStorage.contact = JSON.stringify(contact.toJSON());
};

const displayContact = () => {
    if (sessionStorage.contact) {
        const data = JSON.parse(sessionStorage.contact);
        const contact = new Contact(data.name, data.email, data.phone, data.zip, data.dobString);
        
        getElement("#name").value = contact.name;
        getElement("#email").value = contact.email;
        getElement("#phone").value = contact.phone;
        getElement("#zip").value = contact.zip;
        getElement("#dob").value = contact.dob.toInputString();
    }
};

const displayConfirmPage = () => {
    if (sessionStorage.contact) {
        const data = JSON.parse(sessionStorage.contact);
        const contact = new Contact(data.name, data.email, data.phone, data.zip, data.dobString);
        
        getElement("#lbl_name").textContent = contact.name;
        getElement("#lbl_email").textContent = contact.email;
        getElement("#lbl_phone").textContent = contact.phone;
        getElement("#lbl_zip").textContent = contact.zip;
        getElement("#lbl_dob").textContent = contact.dob.isValid() ? contact.dob.toDateString() : "";
    }
};

const clearMessages = () => {
    const spans = document.querySelectorAll("span");
    const inputs = document.querySelectorAll("input");
    spans.forEach(span => span.textContent = "");
    inputs.forEach(input => input.setCustomValidity(""));
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form){ 
        form.noValidate = true;
        form.addEventListener("invalid", evt => {
            const elem = evt.target;
            const msg = elem.title || elem.validationMessage;
            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        }, true);
        
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                const span = input.nextElementSibling;
                if (span) span.textContent = "";
                input.setCustomValidity("");
            });
        });

        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();

            const contact = new Contact(
                getElement("#name").value,
                getElement("#email").value,
                getElement("#phone").value,
                getElement("#zip").value,
                getElement("#dob").value
            );

            getElement("#name").setCustomValidity(
                !contact.isNameValid() ? "Please enter your name." : ""
            );
            
            getElement("#email").setCustomValidity(
                !contact.isEmailOrPhoneValid() ? "Please enter an email or phone." : ""
            );
            
            getElement("#zip").setCustomValidity(
                !contact.isZipValid() ? "Please enter a 5 digit Zip." : ""
            );

            getElement("#dob").setCustomValidity(
                !contact.dob.isValid() ? "Please enter a valid DOB." :
                !contact.dob.isInPast() ? "DOB must be in the past." : ""
            );

            if(!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                saveContact(contact);
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    }else {     
        displayConfirmPage();
    }
});