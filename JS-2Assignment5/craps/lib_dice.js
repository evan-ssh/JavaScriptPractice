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
        this.die1 = new Die();
        this.die2 = new Die();
        this.total = 0;
    }
    
    roll() {
        this.die1.roll();
        this.die2.roll();
        this.total = this.die1.value + this.die2.value;
        return this.total;
    }
}

export { Die, Dice };