"use strict";

import Trip from 'trip';

// Private constant for storing trips
const tripsArray = [];

// Export object literal as default
export default {
    push(trip) {
        tripsArray.push(trip);
    },
    
    toString() {
        let str = "";
        for (let trip of tripsArray) {
            str += trip.toString();
        }
        return str;
    },
    
    get length() {
        return tripsArray.length;
    }
};