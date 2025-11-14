"use strict";


export function isEmpty(value) {
    return value === null || value === undefined || value.toString().trim() === "";
}

export function isAnyEmpty(...values) {
    return values.some(value => isEmpty(value));
}

export function isLessThanZero(value) {
    const num = parseFloat(value);
    return isNaN(num) || num < 0;
}