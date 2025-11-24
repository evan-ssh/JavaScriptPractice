"use strict";
const $ = s => document.querySelector(s);

const domain = "https://rovers.nebulum.one/api/v1/rovers";
let rovers = [];
let currentRover = null;

document.addEventListener("DOMContentLoaded", async () => {
  const roverSelect = $("#rover");
  const yearSelect = $("#year");
  const monthSelect = $("#month");
  const dateSelect = $("#date");
  const camSelect = $("#camera");
  const display = $("#display");
  const errorSpan = $(".error");

  // 1) get rover data + fill rover dropdown
  rovers = (await (await fetch(domain)).json()).rovers ?? await (await fetch(domain)).json();
  roverSelect.innerHTML = rovers.map(r => `<option>${r.name}</option>`).join("");

  // show first rover by default
  setRover(rovers[0]);

  // 2) rover change handler
  roverSelect.addEventListener("change", () => {
    const r = rovers.find(x => x.name === roverSelect.value);
    if (r) setRover(r);
  });

  // 3) view photos handler
  $("#view").addEventListener("click", async () => {
    errorSpan.textContent = "";
    display.innerHTML = "";

    const earthDate = `${yearSelect.value}-${monthSelect.value}-${dateSelect.value}`;
    const camera = camSelect.value;
    const roverName = currentRover.name;

    const url =
      `${domain}/${roverName}/photos/?earth_date=${earthDate}&camera=${camera}`;

    try {
      const data = await (await fetch(url)).json();
      const photos = data.photos ?? data;

      if (!photos.length) {
        errorSpan.textContent = "No photos for that date/camera.";
        return;
      }

      display.innerHTML = `<h3>${roverName} photos on ${earthDate}</h3>` +
        photos.map(p => `<img src="${p.img_src}" alt="Mars photo">`).join("");
    } catch {
      errorSpan.textContent = "Error loading photos.";
    }
  });

  // ---- functions ----
  function setRover(rover) {
    currentRover = rover;
    $("#options").classList.remove("hide");

    $("#status").textContent = rover.status;
    $("#photos").textContent = rover.total_photos;
    $("#landing").textContent = rover.landing_date;
    $("#max").textContent = rover.max_date;

    // cameras
    camSelect.innerHTML = rover.cameras
      .map(c => `<option value="${c.name}">${c.full_name}</option>`)
      .join("");

    // dates (range landing -> max)
    const [ly, lm, ld] = rover.landing_date.split("-").map(Number);
    const [my, mm, md] = rover.max_date.split("-").map(Number);

    // years
    yearSelect.innerHTML = "";
    for (let y = ly; y <= my; y++) {
      yearSelect.innerHTML += `<option>${y}</option>`;
    }

    // when year/month changes, rebuild lower dropdowns
    yearSelect.onchange = buildMonths;
    monthSelect.onchange = buildDays;

    yearSelect.value = my;
    buildMonths();
    monthSelect.value = mm;
    buildDays();
    dateSelect.value = md;

    function buildMonths() {
      const y = Number(yearSelect.value);
      monthSelect.innerHTML = "";

      let start = 1, end = 12;
      if (y === ly) start = lm;
      if (y === my) end = mm;

      for (let m = start; m <= end; m++) {
        monthSelect.innerHTML += `<option>${m}</option>`;
      }
      buildDays();
    }

    function buildDays() {
      const y = Number(yearSelect.value);
      const m = Number(monthSelect.value);
      dateSelect.innerHTML = "";

      const lastDay = new Date(y, m, 0).getDate();
      let start = 1, end = lastDay;

      if (y === ly && m === lm) start = ld;
      if (y === my && m === mm) end = md;

      for (let d = start; d <= end; d++) {
        dateSelect.innerHTML += `<option>${d}</option>`;
      }
    }
  }
});
