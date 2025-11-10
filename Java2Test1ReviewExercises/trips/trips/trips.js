"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Get references to DOM elements
    const tripList = document.getElementById("trip_list");
    const avgSpan = document.getElementById("avg");
    const totalSpan = document.getElementById("total");
    const distanceInput = document.getElementById("distance");
    const gallonsInput = document.getElementById("gallons");
    const addBtn = document.getElementById("add_trip");
    const clearBtn = document.getElementById("clear_trips");
    const sortSelect = document.getElementById("sort");
    const filterSelect = document.getElementById("filter");

    // Array to store trips; each trip is [distance, gallons, mpg]
    let trips = [];

    // Calculate MPG for a trip
    function calculateMPG(distance, gallons) {
        if (gallons > 0) {
            return distance / gallons;
        } else {
            return 0;
        }
    }

    // Get trips that match the current filter (by minimum MPG)
    function getFilteredTrips() {
        const minMPG = parseInt(filterSelect.value, 10);
        return trips.filter(function(trip) {
            return trip[2] >= minMPG;
        });
    }

    // Sort trips by the selected dropdown value
    function sortTrips(tripArr) {
        const sortBy = sortSelect.value;
        let idx;
        if (sortBy === "distance") {
            idx = 0;
        } else if (sortBy === "gallons") {
            idx = 1;
        } else {
            idx = 2; // mpg
        }
        // Sort descending
        return tripArr.slice().sort(function(a, b) {
            return b[idx] - a[idx];
        });
    }

    // Update the display: trip list, total, and average
    function updateDisplay() {
        // Get filtered and sorted trips
        const filtered = getFilteredTrips();
        const sorted = sortTrips(filtered);

        // Show trips in textarea
        tripList.value = "";
        for (let i = 0; i < sorted.length; i++) {
            const trip = sorted[i];
            tripList.value += "Distance: " + trip[0] + ", Gallons: " + trip[1] + ", MPG: " + trip[2].toFixed(2) + "\n";
        }

        // Calculate total distance using reduce
        let totalDistance = 0;
        for (let i = 0; i < filtered.length; i++) {
            totalDistance += filtered[i][0];
        }

        // Calculate average distance
        let avgDistance = 0;
        if (filtered.length > 0) {
            avgDistance = totalDistance / filtered.length;
        }

        // Update total and average spans
        totalSpan.textContent = totalDistance.toFixed(2);
        avgSpan.textContent = avgDistance.toFixed(2);
    }

    // Add button event: add a new trip
    addBtn.addEventListener("click", function() {
        const distance = parseFloat(distanceInput.value);
        const gallons = parseFloat(gallonsInput.value);

        // Validate inputs
        if (isNaN(distance) || distance <= 0) {
            alert("Please enter a valid distance greater than 0.");
            return;
        }
        if (isNaN(gallons) || gallons <= 0) {
            alert("Please enter a valid gallons value greater than 0.");
            return;
        }

        // Add trip to array
        const mpg = calculateMPG(distance, gallons);
        trips.push([distance, gallons, mpg]);

        // Clear inputs
        distanceInput.value = "";
        gallonsInput.value = "";

        // Update display
        updateDisplay();
    });

    // Clear button event: remove all trips and reset display
    clearBtn.addEventListener("click", function() {
        trips = [];
        tripList.value = "";
        totalSpan.textContent = "";
        avgSpan.textContent = "";
        distanceInput.value = "";
        gallonsInput.value = "";
    });

    // Sort and filter dropdowns: update display when changed
    sortSelect.addEventListener("change", updateDisplay);
    filterSelect.addEventListener("change", updateDisplay);

    // Initial display
    updateDisplay();
});