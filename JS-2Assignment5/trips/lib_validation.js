"use strict";

// Check if a string value is empty
export function isEmpty(value) {
    return value === null || value === undefined || value.toString().trim() === "";
}

// Check if any of a variable number of string values is empty
export function isAnyEmpty(...values) {
    return values.some(value => isEmpty(value));
}

// Check if a value is less than zero (also checks if numeric)
export function isLessThanZero(value) {
    const num = parseFloat(value);
    return isNaN(num) || num < 0;
}