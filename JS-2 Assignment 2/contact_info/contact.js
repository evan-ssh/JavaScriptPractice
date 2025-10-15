"use strict";
const getElement = selector => document.querySelector(selector);

const padNum = num => num.toString().padStart(2, "0");

const saveContact = () => {
    const contactArr = [
        getElement("#name").value,
        getElement("#email").value,
        getElement("#phone").value,
        getElement("#zip").value,
        getElement("#dob").value
    ];
    sessionStorage.setItem("contactInfo", JSON.stringify(contactArr));
};

const clearContact = () => {
    sessionStorage.removeItem("contactInfo");
};

const displayContact = () => {
    const data = sessionStorage.getItem("contactInfo");
    if (data) {
        const contactArr = JSON.parse(data);
        getElement("#name").value = contactArr[0] ?? "";
        getElement("#email").value = contactArr[1] ?? "";
        getElement("#phone").value = contactArr[2] ?? "";
        getElement("#zip").value = contactArr[3] ?? "";
     
        if (contactArr[4]) {
            const dt = new Date(contactArr[4]);
            if (!(dt.toString() == "Invalid Date")) {
                const str = `${dt.getFullYear()}-${padNum(dt.getMonth() + 1)}-${padNum(dt.getDate())}`;
                getElement("#dob").value = str;
            }
        } else {
            getElement("#dob").value = "";
        }
    }
};

const displayConfirmPage = () => {
    const data = sessionStorage.getItem("contactInfo");
    if (data) {
        const contactArr = JSON.parse(data);
        getElement("#lbl_name").textContent = contactArr[0] ?? "";
        getElement("#lbl_email").textContent = contactArr[1] ?? "";
        getElement("#lbl_phone").textContent = contactArr[2] ?? "";
        getElement("#lbl_zip").textContent = contactArr[3] ?? "";
        getElement("#lbl_dob").textContent = contactArr[4] ? new Date(contactArr[4]).toDateString(): "";
    }
};

const clearMessages = () => {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        const span = input.nextElementSibling;
        if (span) span.textContent = "";
    }
    if (inputs.length > 0) inputs[0].focus();
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form) { 
        form.noValidate = true;

        for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const elem = evt.currentTarget;
                const msg = elem.title ? elem.title : elem.validationMessage;
                const span = elem.nextElementSibling;
                if (span) span.textContent = msg;
            });
        }

        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();


            const email = getElement("#email");
            const phone = getElement("#phone");
            let msg = (email.value == "" && phone.value == "") ? "Please enter an email or phone." : "";
            email.setCustomValidity(msg);

            const dob = getElement("#dob"); 
            const dobValue = new Date(dob.value + "T00:00:00");
            if (dobValue.toString() == "Invalid Date") {
                msg = "Please enter a valid DOB.";
            } else {
                let today = new Date();
                today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                msg = (today <= dobValue) ? "DOB must be in the past." : "";
            }
            dob.setCustomValidity(msg);

            if(!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                saveContact();
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    } else {
        displayConfirmPage();
    }
});