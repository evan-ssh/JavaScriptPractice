"use strict";

import { Dice } from 'dice';
import StreetCraps from 'craps';

document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("roll");
    const newGameButton = document.getElementById("new_game");
    const currentRollSpan = document.getElementById("current_roll");
    const pointSpan = document.getElementById("point");
    const message = document.getElementById("message");
    
    const dice = new Dice();
    const game = new StreetCraps();

    rollButton.disabled = false;
    newGameButton.disabled = true;
    currentRollSpan.textContent = "0";
    pointSpan.textContent = "0";
    message.textContent = "";
    
    rollButton.addEventListener("click", () => {
        const total = dice.roll();
        currentRollSpan.textContent = total;
        
        game.playRoll(total);
        pointSpan.textContent = game.currentPoint;   
        message.textContent = game.message;           
        
        if (game.isFinished) {                       
            rollButton.disabled = true;
            newGameButton.disabled = false;
        }
    });
    
    newGameButton.addEventListener("click", () => {
        game.startNewGame();                         
        currentRollSpan.textContent = "0";
        pointSpan.textContent = "0";
        message.textContent = "";
        rollButton.disabled = false;
        newGameButton.disabled = true;
    });
});