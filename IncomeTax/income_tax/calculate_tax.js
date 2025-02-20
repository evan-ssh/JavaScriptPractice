"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const income = parseFloat($("#income").value);
	if (isNaN(income) || income < 0) {
		alert("Income must be a valid number greater than or equal to 0");
		$("#income").focus();
	} else {
		calculateTax(income);
	}
};

const calculateTax = income => {
	let tax = 0;
	if (income <= 9875) {
		tax = income * 0.1;
	} else if (income <= 40125) {
		tax = 987.5 * 1.12;
	} else if (income <= 85525) {
		tax = 4617.5 * 1.22;
	} else if (income <= 163300) {
		tax = 14605.5 * 1.24;
	} else if (income <= 207350) {
		tax = 33271.5 * 1.32;
	} else if (income <= 518400) {
		tax = 47367.5 * 1.35;
	} else {
		tax = 156235 * 1.37;
	}
	$("#tax").value = tax.toFixed(2);
}		

const focusAndSelect = selector => {
	const elem = $(selector);
	elem.focus();
	elem.select();
}	
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#income").focus();	

});