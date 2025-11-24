"use strict";

const domain = "http://127.0.0.1:3000/emails/";

function getElement(selector) {
    return document.querySelector(selector);
}

function displayEmails(emailList) {
    const emailDropdown = getElement("#emails");
    emailDropdown.textContent = ""; 

    for (let user of emailList) {
        const option = document.createElement("option");
        option.value = user.id;
        const optionText = user.name + " - " + user.email;
        option.appendChild(document.createTextNode(optionText));
        emailDropdown.appendChild(option);
    }

    getElement("#name").value = "";
    getElement("#email").value = "";
    getElement("#name").focus();
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const emailResponse = await fetch(domain);
        const emailData = await emailResponse.json();
        if (emailData.error) {
            alert("Server error - " + emailData.error.message);
        } else {
            displayEmails(emailData);
        }
    } catch (e) {
        alert(e.message);
    }

    getElement("#add_email").addEventListener("click", async () => {
        try {
            const nameInput = getElement("#name").value.trim();
            const emailInput = getElement("#email").value.trim();
            if (nameInput === "" || emailInput === "") {
                alert("Please enter both a name and an email.");
                return;
            }
            const newEmail = { name: nameInput, email: emailInput };

            const postResponse = await fetch(domain, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmail)
            });

            const postData = await postResponse.json();

            if (postData.error) {
                alert("Server error - " + postData.error.message);
                return;
            }

            const refreshResponse = await fetch(domain);
            const refreshData = await refreshResponse.json();

            if (refreshData.error) {
                alert("Server error - " + refreshData.error.message);
            } else {
                displayEmails(refreshData);
            }

        } catch (e) {
            alert(e.message);
        }
    });

    getElement("#delete_email").addEventListener("click", async () => {
        try {
            const selectedUserId = getElement("#emails").value;
            if (selectedUserId === "") {
                alert("Please select an email to delete.");
                return;
            }

            const deleteEndpoint = domain + selectedUserId;
            const deleteResponse = await fetch(deleteEndpoint, {
                method: "DELETE"
            });

            const deleteData = await deleteResponse.json();
            if (deleteData.error) {
                alert("Server error - " + deleteData.error.message);
                return;
            }

            const refreshResponse = await fetch(domain);
            const refreshData = await refreshResponse.json();

            if (refreshData.error) {
                alert("Server error - " + refreshData.error.message);
            } else {
                displayEmails(refreshData);
            }
        } catch (e) {
            alert(e.message);
        }
    });
});
