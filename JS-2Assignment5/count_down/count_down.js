"use strict";
import Event from "./lib_event.js";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDate = getElement("#date").value;
  
        const event = new Event(eventName, eventDate);
        const message = getElement("#message");  
 
        if (!event.hasName() || !event.hasDate()) {
            message.textContent = "Please enter both a name and a date.";
            return;
        }

        if (!event.isValidDate()) {
            message.textContent = "Please enter a valid date.";
            return;
        }
        message.textContent = event.message();
    });
    
    getElement("#event").focus();
});