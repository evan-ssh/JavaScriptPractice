"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const usersSelect = getElement("#users");
    const listTableBody = getElement("#list tbody");

    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const todosUrlBase = "https://jsonplaceholder.typicode.com/todos/?userId=";

    const fetchJSON = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    };

    const loadUsers = async () => {
        const users = await fetchJSON(usersUrl);

        usersSelect.innerHTML = "";

        for (const user of users) {
            const option = document.createElement("option");
            option.value = user.id;
            option.textContent = user.name;
            usersSelect.appendChild(option);
        }
    };

    const displayTodos = (todos) => {
        listTableBody.innerHTML = "";

        for (const todo of todos) {
            const row = document.createElement("tr");

            const itemCell = document.createElement("td");
            itemCell.textContent = todo.title;

            const completedCell = document.createElement("td");
            completedCell.textContent = todo.completed ? "Yes" : "No";

            row.appendChild(itemCell);
            row.appendChild(completedCell);
            listTableBody.appendChild(row);
        }
    };

    const loadTodosForUser = async (userId) => {
        const todos = await fetchJSON(todosUrlBase + userId);
        displayTodos(todos);
    };

    const startup = async () => {
        try {
            await loadUsers();
            const firstUserId = usersSelect.value;
            await loadTodosForUser(firstUserId);
t
            usersSelect.addEventListener("change", async () => {
                await loadTodosForUser(usersSelect.value);
            });

        } catch (err) {
            console.error(err);
            alert("Error loading users/todos. Check console.");
        }
    };

    startup();
});
