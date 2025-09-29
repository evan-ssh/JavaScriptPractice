"use strict";
const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const nameField = getElement("#name");
    const emailField = getElement("#email");
    const phoneField = getElement("#phone");
    const zipField = getElement("#zip");
    const dobField = getElement("#dob");
    const submitBtn = getElement("#save");
    const resetBtn = getElement("#reset");

    const fields = [nameField,emailField,phoneField,zipField,dobField]

    fields.forEach(field=> {
        const span = document.createElement("span");
        span.textContent = "*"
        field.parentNode.appendChild(span)

        
    })


    submitBtn.addEventListener("click", (evt) =>{
        let valid = true;

        if(!nameField.value.trim()){
            valid = false
            const nameSpan = nameField.parentNode.querySelector("span")
            nameSpan.textContent = "Please enter your name."
        }

        if(!emailField.value.trim() && !phoneField.value.trim()){
            valid = false;
            const emailSpan = emailField.parentNode.querySelector("span");
            emailSpan.textContent = "Please enter an email or phone."

        }


        const zipSpan = zipField.parentNode.querySelector("span");
        if(!zipField.value.trim() || !/^\d{5}$/.test(zipField.value.trim())){
            valid = false;
            
            zipSpan.textContent = "Please enter a 5 digit ZIP.";
        }else{
            zipSpan.textContent = "";
        }

        const dobSpan = dobField.parentNode.querySelector("span");
        if(!dobField.value.trim()){
            valid = false;
            dobSpan.textContent = "Please enter your date of birth.";         
        }else{
            const userDate = new Date(dobField.value + "T00:00:00");
            const currentDate = new Date()
            currentDate.setHours(0,0,0,0);
            if(userDate > currentDate){
                valid = false;
                dobSpan.textContent = "Please enter a date in the past."
            }else{
                dobSpan.textContent = "";
            }
            }

        

        if(!valid){
            evt.preventDefault();
        }
    })

    resetBtn.addEventListener("click", () =>{
        fields.forEach(field =>{
            field.value = "";
            field.parentNode.querySelector("span").textContent = "*";
        })
    })
});