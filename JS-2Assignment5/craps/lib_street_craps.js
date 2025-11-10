"use strict";

class StreetCraps {
    constructor() {
        this.point = 0;
        this.comeOutRoll = true;
        this.message = "";
        this.gameOver = false;
    }
    
    playRoll(total) {
        if (this.comeOutRoll) {
            // Come out roll logic
            if (total === 7 || total === 11) {
                this.message = "You win!";
                this.gameOver = true;
            } else if (total === 2 || total === 3 || total === 12) {
                this.message = "You lose!";
                this.gameOver = true;
            } else {
                this.point = total;
                this.comeOutRoll = false;
                this.message = `Point is ${this.point}. Roll again!`;
            }
        } else {
            // Point roll logic
            if (total === this.point) {
                this.message = "You win!";
                this.gameOver = true;
            } else if (total === 7) {
                this.message = "You lose!";
                this.gameOver = true;
            } else {
                this.message = `Roll again! Point is ${this.point}`;
            }
        }
    }
    
    newGame() {
        this.point = 0;
        this.comeOutRoll = true;
        this.message = "";
        this.gameOver = false;
    }
}

export default StreetCraps;