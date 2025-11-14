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
            if (total === 7 || total === 11) {
                this.message = `You rolled ${total} on the come out roll - you win!`;
                this.gameOver = true;
            } else if (total === 2 || total === 3 || total === 12) {
                this.message = `You rolled ${total} on the come out roll - you lose.`;
                this.gameOver = true;
            } else {
                this.point = total;
                this.comeOutRoll = false;
                this.message = `Point is ${this.point}. Roll again.`;
            }
        } else {
            if (total === this.point) {
                this.message = `You rolled ${total} - you win!`;
                this.gameOver = true;
            } else if (total === 7) {
                this.message = `You rolled 7 before you rolled the point - you lose.`;
                this.gameOver = true;
            } else {
                this.message = `Roll again.`;
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