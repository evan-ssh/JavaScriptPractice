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
    const contact = Contact.fromJSON(sessionStorage.contact);
    if (contact) {
        getElement("#name").value = contact.name;
        getElement("#email").value = contact.email;
        getElement("#phone").value = contact.phone;
        getElement("#zip").value = contact.zip;
        getElement("#dob").value = contact.dob.toInputString();
    }
};

const displayConfirmPage = () => {
    const contact = Contact.fromJSON(sessionStorage.contact);
    if (contact) {
        getElement("#lbl_name").textContent = contact.name;
        getElement("#lbl_email").textContent = contact.email;
        getElement("#lbl_phone").textContent = contact.phone;
        getElement("#lbl_zip").textContent = contact.zip;
        getElement("#lbl_dob").textContent = contact.dob.isValid() ? contact.dob.toDateString() : "";
    }
};

const clearMessages = () => {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        const span = input.nextElementSibling;
        if (span) span.textContent = "";
    }
    inputs[0].focus();
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form) {  // index.html
        // turn off default HTML validation messages
        form.noValidate = true;

        // attach invalid event handler for form controls
        for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const elem = evt.currentTarget;
                const msg = elem.title ? elem.title : elem.validationMessage;
                const span = elem.nextElementSibling;
                if (span) span.textContent = msg;
            });
        }

        // display data from web storage in contact form
        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();

            // Create contact object from form data
            const contact = new Contact(
                getElement("#name").value,
                getElement("#email").value,
                getElement("#phone").value,
                getElement("#zip").value,
                getElement("#dob").value
            );

            // validate user has entered an email or a phone number
            const email = getElement("#email");
            let msg = !contact.isEmailOrPhoneProvided() ? "Please enter an email or phone." : "";
            email.setCustomValidity(msg);

            // validate zip code
            const zip = getElement("#zip");
            msg = !contact.isZipValid() ? "Please enter a 5 digit Zip." : "";
            zip.setCustomValidity(msg);

            // validate dob 
            const dob = getElement("#dob");
            if (!contact.dob.isValid()) {
                msg = "Please enter a valid DOB.";
            } else if (!contact.dob.isInPast()) {
                msg = "DOB must be in the past.";
            } else {
                msg = "";
            }
            dob.setCustomValidity(msg);

            // validate form
            if(!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                // save contact object to web storage
                saveContact(contact);
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    } else {     // confirm.html
        // display data from web storage in confirm page labels
        displayConfirmPage();
    }
});