"use strict";

class Event {
    constructor(name, dateString) {
        this.name = name;
        this.dateString = dateString;
        this.date = new Date(dateString);
    }
    
    get hasName() {
        return this.name.length > 0;
    }
    
    get hasDate() {
        return this.dateString.length > 0;
    }
    
    get isValidDate() {
        return this.date != "Invalid Date";
    }
    
    get days() {
        const today = new Date();
        const msFromToday = this.date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; 
        const daysToDate = Math.ceil( msFromToday / msForOneDay );
        return daysToDate;
    }
    
    get message() {
        let msg = "";
        if (this.days == 0) {
            msg = `Hooray! Today is ${this.name}! (${this.date.toDateString()})`;
        } else if (this.days > 0) {
            msg = `${this.days} day(s) until ${this.name}! (${this.date.toDateString()})`;
        } else if (this.days < 0) {
            msg = `${this.name} happened ${Math.abs(this.days)} 
                   day(s) ago. (${this.date.toDateString()})`;
        }
        return msg;
    }
}

export default Event;