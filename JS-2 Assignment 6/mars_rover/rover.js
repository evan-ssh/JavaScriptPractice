"use strict";
const $ = selector => document.querySelector(selector);

const domain = "https://rovers.nebulum.one/api/v1/rovers";
let roverList = [];
let selectedRover = null;

const addPadding = num => String(num).padStart(2, "0");

document.addEventListener("DOMContentLoaded", async () => {
  const roverDropdown = $("#rover");
  const yearDropdown = $("#year");
  const monthDropdown = $("#month");
  const dayDropdown = $("#date");
  const cameraDropdown = $("#camera");
  const photoDisplay = $("#display");
  const errorMessage = $(".error");

  try {
    const roverResponse = await fetch(domain);
    const roverData = await roverResponse.json();
    roverList = roverData.rovers;

    roverDropdown.innerHTML = roverList.map(rover => `<option value="${rover.name}">${rover.name}</option>`).join("");
    if (roverList.length > 0) {
      setRover(roverList[0]);
    }
  } catch (e) {
    errorMessage.textContent = "Error loading rovers.";
    return;
  }

  roverDropdown.addEventListener("change", () => {
    const rover = roverList.find(r => r.name === roverDropdown.value);
    if (rover) setRover(rover);
  });

  $("#view").addEventListener("click", async () => {
    errorMessage.textContent = "";
    photoDisplay.innerHTML = "";

    const earthDate =
      `${yearDropdown.value}-${addPadding(monthDropdown.value)}-${addPadding(dayDropdown.value)}`;
    const cameraCode = cameraDropdown.value;
    const roverName = selectedRover.name;

    const photosUrl =
      `${domain}/${roverName}/photos/?earth_date=${earthDate}&camera=${cameraCode}`;

    try {
      const photosResponse = await fetch(photosUrl);
      const photoData = await photosResponse.json();
      const photos = photoData.photos || [];

      if (photos.length === 0) {
        errorMessage.textContent = "No photos for that date/camera.";
        return;
      }

      photoDisplay.innerHTML =
        `<h3>${roverName} photos on ${earthDate}</h3>` + photos.map(p => `<img src="${p.img_src}" alt="Mars photo">`).join("");
    } catch (e) {
      errorMessage.textContent = "Error loading photos.";
    }
  });

  function setRover(rover) {
    selectedRover = rover;
    $("#options").classList.remove("hide");

    if (rover.status) {
      $("#status").textContent = rover.status;
    } else {
      $("#status").textContent = "N/A";
    }

    $("#photos").textContent = rover.total_photos;
    $("#landing").textContent = rover.landing_date;
    $("#max").textContent = rover.max_date;

    cameraDropdown.innerHTML = rover.cameras.map(cam => `<option value="${cam.name}">${cam.full_name}</option>`).join("");
    
    const [landingYear, landingMonth, landingDay] = rover.landing_date.split("-").map(Number);
    const [maxYear, maxMonth, maxDay] = rover.max_date.split("-").map(Number);
    yearDropdown.innerHTML = "";
    for (let i = landingYear; i <= maxYear; i++) {
      yearDropdown.innerHTML += `<option value="${i}">${i}</option>`;
    }

    yearDropdown.onchange = buildMonths;
    monthDropdown.onchange = buildDays;

    yearDropdown.value = maxYear;
    buildMonths();
    monthDropdown.value = maxMonth;
    buildDays();
    dayDropdown.value = maxDay;

    function buildMonths() {
      const selectedYear = Number(yearDropdown.value);
      monthDropdown.innerHTML = "";
      let start = 1, end = 12;
      if (selectedYear === landingYear) start = landingMonth;
      if (selectedYear === maxYear) end = maxMonth;

      for (let i = start; i <= end; i++) {
        monthDropdown.innerHTML += `<option value="${i}">${i}</option>`;
      }
      buildDays();
    }

    function buildDays() {
      const selectedYear = Number(yearDropdown.value);
      const selectedMonth = Number(monthDropdown.value);
      dayDropdown.innerHTML = "";

      const lastDay = new Date(selectedYear, selectedMonth, 0).getDate();
      let start = 1, end = lastDay;

      if (selectedYear === landingYear && selectedMonth === landingMonth) start = landingDay;
      if (selectedYear === maxYear && selectedMonth === maxMonth) end = maxDay;

      for (let i = start; i <= end; i++) {
        dayDropdown.innerHTML += `<option value="${i}">${i}</option>`;
      }
    }
  }
});
