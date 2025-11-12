"use strict";

class Trip {
    constructor(destination, miles, gallons) {
        this.destination = destination;
        this.miles = parseFloat(miles);
        this.gallons = parseFloat(gallons);
    }
    
    get mpg() {
        return this.miles / this.gallons;
    }
    
    toString() {
        return `${this.destination} | ${this.miles} miles | ${this.gallons} gallons | ${this.mpg.toFixed(1)} mpg\n`;
    }
}

// Export Trip class as default
export default Trip;