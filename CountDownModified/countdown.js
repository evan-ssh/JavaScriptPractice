"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    let timerId = null;
    getElement("#countdown").addEventListener("click", () => {
        if (timerId){
            clearInterval(timerId);
            timerId = null;
        }

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

        function updateCountdown(){
            const now = new Date();
            let secondsLeft = Math.floor((eventDate.getTime() - now.getTime()) / 1000);

            const displayDate = eventDate.toDateString();
            let msg = "";

            if(secondsLeft === 0){
                msg = `Hooray! Today is ${eventName}! (${displayDate})`;
            
            clearInterval(timerId);
            timerId = null;
            }else if(secondsLeft > 0){
                const days = Math.floor(secondsLeft / 86400);
                secondsLeft %= 86400;
                const hours = Math.floor(secondsLeft/3600);
                secondsLeft %= 3600;
                const minutes = Math.floor(secondsLeft / 60);
                const seconds = secondsLeft % 60;
                msg = `${days} day(s), ${hours} hour(s), ${minutes} minute(s), ${seconds} second(s) until ${eventName}! (${displayDate})`;
            }else{
                secondsLeft = Math.abs(secondsLeft);
                const days = Math.floor(secondsLeft / 86400);
                secondsLeft %= 86400;
                const hours = Math.floor(secondsLeft / 3600);
                secondsLeft %= 3600;
                const minutes = Math.floor(secondsLeft / 60);
                const seconds = secondsLeft % 60;
                msg = `${eventName} happened ${days} day(s), ${hours} hour(s), ${minutes} minute(s), ${seconds} second(s) ago. (${displayDate})`;
                clearInterval(timerId);
                timerId = null;
            }
            messageLbl.textContent = msg;
        }
        updateCountdown()
        timerId = setInterval(updateCountdown, 1000);
    });
    getElement("#event").focus();
});