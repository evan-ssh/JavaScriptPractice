"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    const first = getElement("#first");
    const last = getElement("#last");
    const birth = getElement("#birth");
    const guardian = getElement("#guardian");
    const spans = form.querySelectorAll("span");
    const inputs = form.querySelectorAll("input");

    // Part A: Set types, required, and autofocus using JS
    first.type = "text";
    last.type = "text";
    birth.type = "date";
    guardian.type = "text";
    first.required = true;
    last.required = true;
    birth.required = true;
    first.autofocus = true;

    // Part B: Disable HTML validation
    form.noValidate = true;

    // Attach invalid event handlers to each input
    inputs.forEach(input => {
        input.addEventListener("invalid", () => {
            const span = input.nextElementSibling;
            if (span && span.tagName === "SPAN") {
                // Custom error messages
                if (input === first) span.textContent = "First name is required.";
                else if (input === last) span.textContent = "Last name is required.";
                else if (input === birth) span.textContent = "Birth date is required.";
                else if (input === guardian) span.textContent = "Guardian is required if racer is under 16.";
            }
        });
        // Clear error on input
        input.addEventListener("input", () => {
            const span = input.nextElementSibling;
            if (span && span.tagName === "SPAN") span.textContent = "";
            input.setCustomValidity("");
        });
    });

    // Part C: Custom validation for guardian if under 16
    form.addEventListener("submit", evt => {
        // Clear all error messages
        spans.forEach(span => span.textContent = "");
        let valid = true;

        // Only do custom validation if birth date is filled
        if (birth.value) {
            const limit = new Date();
            limit.setFullYear(limit.getFullYear() - 16);
            const enteredDate = new Date(birth.value);

            if (enteredDate > limit) {
                // Under 16, guardian required
                if (!guardian.value.trim()) {
                    const span = guardian.nextElementSibling;
                    if (span && span.tagName === "SPAN") {
                        span.textContent = "Guardian is required if racer is under 16.";
                    }
                    guardian.setCustomValidity("Guardian required");
                    valid = false;
                } else {
                    guardian.setCustomValidity("");
                }
            } else {
                guardian.setCustomValidity("");
            }
        } else {
            guardian.setCustomValidity("");
        }

        if (!valid) {
            evt.preventDefault();
        }
    });
});