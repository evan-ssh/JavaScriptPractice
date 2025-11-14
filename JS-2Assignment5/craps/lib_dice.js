"use strict";

class Die {
    constructor() {
        this.value = 1;
    }
    
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        return this.value;
    }
}

class Dice {
    constructor() {
        this.dice1 = new Die();
        this.dice2 = new Die();
        this.diceTotal = 0;
    }
    
    roll() {
        this.dice1.roll();
        this.dice2.roll();
        this.diceTotal = this.dice1.value + this.dice2.value;
        return this.diceTotal;
    }
}

export { Die, Dice };