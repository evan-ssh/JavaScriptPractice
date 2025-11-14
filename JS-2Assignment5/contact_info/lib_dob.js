"use strict";

class Dob extends Date {
    constructor(dateString) {
        super(dateString + "T00:00:00");
    }
    
    isValid() {
        return this.toString() !== "Invalid Date";
    }
    
    isInPast() {
        let today = new Date();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return this < today;
    }
    
    toInputString() {
        if (!this.isValid()) return "";
        const year = this.getFullYear();
        const month = (this.getMonth() + 1).toString().padStart(2, "0");
        const day = this.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
}

export default Dob;