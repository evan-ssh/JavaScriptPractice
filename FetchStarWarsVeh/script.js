document.getElementById('fetchVehicles').addEventListener('click', function() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch('https://swapi.dev/api/vehicles/', requestOptions)
      .then(response => response.json())
      .then(result => {
        const vehiclesContainer = document.getElementById('vehicles');
        vehiclesContainer.innerHTML = ''; // Clear existing content
  
        result.results.forEach(vehicle => {
          const vehicleDiv = document.createElement('div');
          vehicleDiv.classList.add('vehicle');
  
          const vehicleName = document.createElement('h2');
          vehicleName.textContent = vehicle.name;
  
          const vehicleDetails = document.createElement('p');
          vehicleDetails.innerHTML = `
            <strong>Model:</strong> ${vehicle.model}<br>
            <strong>Manufacturer:</strong> ${vehicle.manufacturer}<br>
            <strong>Cost in Credits:</strong> ${vehicle.cost_in_credits}<br>
            <strong>Length:</strong> ${vehicle.length} meters<br>
            <strong>Max Speed:</strong> ${vehicle.max_atmosphering_speed} km/h<br>
            <strong>Crew:</strong> ${vehicle.crew}<br>
            <strong>Passengers:</strong> ${vehicle.passengers}
          `;
  
          vehicleDiv.appendChild(vehicleName);
          vehicleDiv.appendChild(vehicleDetails);
          vehiclesContainer.appendChild(vehicleDiv);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  