"use strict";

import { Dice } from './lib_dice.js';
import StreetCraps from './lib_street_craps.js';

document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("roll");
    const newGameButton = document.getElementById("new_game");
    const currentRollSpan = document.getElementById("current_roll");
    const pointSpan = document.getElementById("point");
    const messageP = document.getElementById("message");
    
    const dice = new Dice();
    const game = new StreetCraps();
    
    // Initialize game state
    rollButton.disabled = false;
    newGameButton.disabled = true;
    currentRollSpan.textContent = "0";
    pointSpan.textContent = "0";
    messageP.textContent = "";
    
    rollButton.addEventListener("click", () => {
        // Roll the dice
        const total = dice.roll();
        currentRollSpan.textContent = total;
        
        // Play the roll
        game.playRoll(total);
        
        // Update point display
        pointSpan.textContent = game.point;
        
        // Update message
        messageP.textContent = game.message;
        
        // Check if game is over
        if (game.gameOver) {
            messageP.style.color = "red";
            rollButton.disabled = true;
            newGameButton.disabled = false;
        }
    });
    
    newGameButton.addEventListener("click", () => {
        // Start new game
        game.newGame();
        
        // Reset display
        currentRollSpan.textContent = "0";
        pointSpan.textContent = "0";
        messageP.textContent = "";
        messageP.style.color = "";
        
        // Reset button states
        rollButton.disabled = false;
        newGameButton.disabled = true;
    });
});