"use strict";

const getElement = selector => document.querySelector(selector);
let countdownInterval;
document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message"); 

        function countDown(){
            const today = new Date();
            const msFromToday = eventDate.getTime() - today.getTime();
            const totalSeconds = Math.floor(msFromToday/ 1000);
            const daysToDate = Math.floor(totalSeconds / 86400);
            const hours = Math.floor(((totalSeconds % 86400) / 3600));
            const minutes = Math.floor(((totalSeconds % 3600)/ 60));
            const seconds = Math.floor(totalSeconds % 60)
        // create and display message 
            const displayDate = eventDate.toDateString();
            let msg = "";
            if (daysToDate == 0) {
                msg = `Hooray! Today is ${eventName}! (${displayDate})`;
                clearInterval(countdownInterval);
            } else if (daysToDate > 0) {
                msg = `${daysToDate} day(s), ${hours} hours, ${minutes} minutes, ${seconds} seconds until ${eventName}! (${displayDate})`;
            } else if (daysToDate < 0) {
                msg = `${eventName} happened ${Math.abs(daysToDate)} day(s) ago. (${displayDate})`;
                clearInterval(countdownInterval)
        }
        messageLbl.textContent = msg;
        }

        // make sure user entered event and date 
        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // convert event date string to Date object and check for validity
        const eventDate = new Date(eventDateString);
        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        if(countdownInterval) clearInterval(countdownInterval);

        countDown();
        countdownInterval = setInterval(countDown, 1000);
    });

    // set focus on first text box
    getElement("#event").focus();
});