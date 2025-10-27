"use strict";

const validation = {
    isNumeric(value) {
        return !isNaN(value) && typeof value === 'number';
    },

    isInRange(value, min, max) {
        if (!this.isNumeric(value)) {
            return false;
        }
        return value >= min && value <= max;
    }
};