"use strict";

const url = "http://127.0.0.1:3000/emails/";

function getElement(selector) {
    return document.querySelector(selector);
}

function displayEmails(emails) {
    const selectElement = getElement("#emails");
    selectElement.textContent = ""; 
    for (let email of emails) {
        const option = document.createElement("option");
        option.value = email.id;
        const text = email.name + " - " + email.email;
        option.appendChild(document.createTextNode(text));
        selectElement.appendChild(option);
    }
    getElement("#name").value = "";
    getElement("#email").value = "";
    getElement("#name").focus();
}

document.addEventListener("DOMContentLoaded", async() => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.error)
            alert("Server error - " + json.error.message);
        else
            displayEmails(json);        
    } catch(e) {
        alert(e.message);  
    }          

    getElement("#add_email").addEventListener("click", async() => {
        try {
            // get user entries
            const name = getElement("#name").value.trim();
            const email = getElement("#email").value.trim();

            if (name === "" || email === "") {
                alert("Please enter both a name and an email.");
                return;
            }

            const newEmail = { name: name, email: email };

            // make API POST request to add email to list
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmail)
            });

            const json = await response.json();

            if (json.error) {
                alert("Server error - " + json.error.message);
                return;
            }

            // make API GET request to display updated data
            const getResponse = await fetch(url);
            const getJson = await getResponse.json();

            if (getJson.error)
                alert("Server error - " + getJson.error.message);
            else
                displayEmails(getJson);

        } catch(e) {
            alert(e.message);
        }
    });

    getElement("#delete_email").addEventListener("click", async() => {
        try {
            // get selected email
            const id = getElement("#emails").value;

            if (id == "") {
                alert ("Please select an email to delete.");
                return;
            } 

            // make API DELETE request to delete email from list
            const deleteUrl = url + id;
            const response = await fetch(deleteUrl, {
                method: "DELETE"
            });

            const json = await response.json();

            if (json.error) {
                alert("Server error - " + json.error.message);
                return;
            }

            // make API GET request to display updated data
            const getResponse = await fetch(url);
            const getJson = await getResponse.json();

            if (getJson.error)
                alert("Server error - " + getJson.error.message);
            else
                displayEmails(getJson);

        } catch(e) {
            alert(e.message);
        }
    });
});
