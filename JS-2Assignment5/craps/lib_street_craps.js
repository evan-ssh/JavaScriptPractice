"use strict";

class StreetCraps {
    constructor() {
        this.currentPoint = 0;
        this.firstRoll = true;
        this.message = "";
        this.isFinished = false;
    }
    
    playRoll(diceTotal) {
        if (this.firstRoll) {
            if (diceTotal === 7 || diceTotal === 11) {
                this.message = `You rolled ${diceTotal} on the come out roll - you win!`;
                this.isFinished = true;
            } else if (diceTotal === 2 || diceTotal === 3 || diceTotal === 12) {
                this.message = `You rolled ${diceTotal} on the come out roll - you lose.`;
                this.isFinished = true;
            } else {
                this.currentPoint = diceTotal;
                this.firstRoll = false;
                this.message = `Point is ${this.currentPoint}. Roll again.`;
            }
        } else {
            if (diceTotal === this.currentPoint) {
                this.message = `You rolled ${diceTotal} - you win!`;
                this.isFinished = true;
            } else if (diceTotal === 7) {
                this.message = `You rolled 7 before you rolled the point - you lose.`;
                this.isFinished = true;
            } else {
                this.message = `Roll again.`;
            }
        }
    }
    
    startNewGame() {
        this.currentPoint = 0;
        this.firstRoll = true;
        this.message = "";
        this.isFinished = false;
    }
}

export default StreetCraps;