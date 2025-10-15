"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    let playerNodeList = document.querySelectorAll("a");
    let playerCards = []
    for(player of playerNodeList){
        let Imgsrc = player.href;
        let playerName = player.title;
        playerCards.push({Imgsrc,playerName})
    }

    function rotateCard(){
        let currentCard = playerCards[index];
        let imgSrc = currentCard.href;
        let playerName = currentCard.title;
        $("#image").src = imgSrc;
        $("#caption").value = playerName;
        
    }



	$("#start").addEventListener("click", () =>{

    })
});
