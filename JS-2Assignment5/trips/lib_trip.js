"use strict";

class Trip {
    constructor(destination, miles, gallons) {
        this.destination = destination;
        this.miles = parseFloat(miles);
        this.gallons = parseFloat(gallons);
    }
    
    mpg() {
        return this.miles / this.gallons;
    }
    
    toString() {
        return `${this.destination}: Miles - ${this.miles}; MPG - ${this.mpg().toFixed(1)}\n`;
    }
}

export default Trip;