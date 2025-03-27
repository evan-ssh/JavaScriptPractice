// Function to fetch and populate characters in the dropdown
function fetchAndPopulateCharacters() {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        const characters = data.results;
        const characterSelect = document.getElementById('characterSelect');
  
        characters.forEach((character, index) => {
          const option = document.createElement('option');
          option.value = index;
          option.textContent = character.name;
          characterSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to display selected character details
  function displayCharacterDetails(index) {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        const character = data.results[index];
        const characterInfo = document.getElementById('characterInfo');
        characterInfo.innerHTML = `
          <h2>${character.name}</h2>
          <p>
            <strong>Height:</strong> ${character.height} cm<br>
            <strong>Mass:</strong> ${character.mass} kg<br>
            <strong>Hair Color:</strong> ${character.hair_color}<br>
            <strong>Skin Color:</strong> ${character.skin_color}<br>
            <strong>Eye Color:</strong> ${character.eye_color}<br>
            <strong>Birth Year:</strong> ${character.birth_year}<br>
            <strong>Gender:</strong> ${character.gender}
          </p>
        `;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Event listener for dropdown change
  document.getElementById('characterSelect').addEventListener('change', function() {
    const selectedIndex = this.value;
    if (selectedIndex) {
      displayCharacterDetails(selectedIndex);
    } else {
      document.getElementById('characterInfo').innerHTML = '';
    }
  });
  
  // Fetch and populate characters when the page loads
  document.addEventListener('DOMContentLoaded', fetchAndPopulateCharacters);
  