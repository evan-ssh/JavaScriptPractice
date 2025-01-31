"use strict";
const farenheit = parseInt(prompt("Enter temp in farenheit")).toFixed(1);
const celsius = ((farenheit - 32) * 5/9).toFixed(1);
const html = `${farenheit}F = ${celsius}C`;
document.write(html);