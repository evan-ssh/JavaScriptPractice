"use strict";

const getElement = selector => document.querySelector(selector);

const domain = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos/?userId=";

document.addEventListener("DOMContentLoaded", async () => {
    const userDropdown = getElement("#users");
    const todoTableBody = getElement("#list tbody");

    try {
        const usersResponse = await fetch(domain);
        const users = await usersResponse.json();
        userDropdown.innerHTML = "";
        for (const user of users) {
            const option = document.createElement("option");
            option.value = user.id;
            option.textContent = user.name;
            userDropdown.appendChild(option);
        }

        await showTodo(userDropdown.value);

        userDropdown.addEventListener("change", async () => {
            await showTodo(userDropdown.value);
        });
    } catch (err) {
        console.error(err);
        alert("Error loading to do list.");
    }

    async function showTodo(userId) {
        const todosResponse = await fetch(TODOS_URL + userId);
        const todos = await todosResponse.json();
        todoTableBody.innerHTML = "";
        for (const todo of todos) {
            const row = document.createElement("tr");
            const taskTitle = document.createElement("td");
            taskTitle.textContent = todo.title;
            const taskStatus = document.createElement("td");
            if (todo.completed) {
                taskStatus.textContent = "Yes";
            } else {
                taskStatus.textContent = "No";
            }
            row.appendChild(taskTitle);
            row.appendChild(taskStatus);
            todoTableBody.appendChild(row);
        }
    }
});
