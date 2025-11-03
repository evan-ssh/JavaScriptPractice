"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	const caption = $("#caption");
    const machineImage = $("#image")
    const heading = $("#title")
    const resetBtn = $("#reset")
    const startBtn = $("#start")
    const players = document.querySelectorAll("#image_list a");
    let intervalId = null
    let currentIndex = 0

    startBtn.addEventListener("click", () => {
        if(intervalId == null){
            startBtn.value = "stop"
            intervalId = setInterval( () =>{
                const playerName = players[currentIndex].title;
                const playerImg = players[currentIndex].href;
                machineImage.src = playerImg
                caption.textContent = playerName
                currentIndex = (currentIndex  + 1) % players.length ;
            }, 50);
        }else{
            startBtn.value = "start";
            clearInterval(intervalId);
            heading.innerHTML = "<b> YOU WIN </b>"
            intervalId = null

        }

      
        });
           
    });