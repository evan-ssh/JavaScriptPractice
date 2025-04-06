// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to get a cookie by name
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Function to display the stored username
  function displayUsername() {
    let username = getCookie("username");
    let output = document.getElementById("output");
    if (username) {
      output.innerHTML = `<p>Saved Username: ${username}</p>`;
    } else {
      output.innerHTML = "<p>No username saved.</p>";
    }
  }
  
  // Event listener for form submission
  document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    setCookie("username", username, 7);
    displayUsername();
  });
  
  // Display the username on page load
  document.addEventListener("DOMContentLoaded", displayUsername);
  