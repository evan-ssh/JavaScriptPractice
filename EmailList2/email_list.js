"use strict"

const $ = selector => document.querySelector(selector);

const joinList = evt => {
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;
    
    let isValid = true;
    if (email1 == "") { 
        $("#email_1_error").textContent = "Email is required.";
        isValid = false;
    } else { 
        $("#email_1_error").textContent = ""; 
    }

    if (email1 != email2) { 
        $("#email_2_error").textContent = "Emails must match.";
        isValid = false;
    } else { 
        $("#email_2_error").textContent = ""; 
    }

    if (firstName == "") {
        $("#first_name_error").textContent = "First name is required.";
        isValid = false;
    } else { 
        $("#first_name_error").textContent = ""; 
    }

    if ( !isValid ) {
        evt.preventDefault(); 
    }
};

const clearForm = () => {
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*"; 
    $("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#email_1").focus();
});
