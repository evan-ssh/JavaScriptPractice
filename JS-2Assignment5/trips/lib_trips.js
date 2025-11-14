"use strict";

import Trip from 'trip';

const tripsList = [];

export default {
    push(trip) {
        tripsList.push(trip);
    },
    
    toString() {
        let str = "";
        for (let trip of tripsList) {
            str += trip.toString();
            if (!trip.toString().endsWith('\n')) {
                str += '\n'; 
            }
        }
        
        if (tripsList.length > 0) {
            const totalMPG = tripsList.reduce((sum, trip) => sum + trip.mpg(), 0);
            const avgMPG = totalMPG / tripsList.length;
            str += `\nAverage MPG: ${avgMPG.toFixed(1)}`;
        }
        return str;
    },
    
    length() {
        return tripsList.length;
    }
};