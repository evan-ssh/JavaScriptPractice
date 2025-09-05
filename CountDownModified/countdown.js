"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  

        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        const eventDate = new Date(eventDateString);
        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        const today = new Date();
        const msFromToday = eventDate.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; 
        const daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        
        const displayDate = eventDate.toDateString();
        let msg = "";
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${eventName}! (${displayDate})`;
        } else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${eventName}! (${displayDate})`;
        } else if (daysToDate < 0) {
            msg = `${eventName} happened ${Math.abs(daysToDate)} 
                   day(s) ago. (${displayDate})`;
        }
        messageLbl.textContent = msg;
    });

 
    getElement("#event").focus();
});