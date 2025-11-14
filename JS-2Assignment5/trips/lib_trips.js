"use strict";

import Trip from 'trip';

const tripsArray = [];

export default {
    push(trip) {
        tripsArray.push(trip);
    },
    
    toString() {
        let str = "";
        for (let trip of tripsArray) {
            str += trip.toString();
            if (!trip.toString().endsWith('\n')) {
                str += '\n'; 
            }
        }
        
        if (tripsArray.length > 0) {
            const totalMPG = tripsArray.reduce((sum, trip) => sum + trip.mpg, 0);
            const avgMPG = totalMPG / tripsArray.length;
            str += `\nAverage MPG: ${avgMPG.toFixed(1)}`;
        }
        return str;
    },
    
    get length() {
        return tripsArray.length;
    }
};