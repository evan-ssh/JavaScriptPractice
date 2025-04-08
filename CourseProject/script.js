document.addEventListener("DOMContentLoaded", function(){
    const peopleButton = document.getElementById("people");
    const planetButton = document.getElementById("planets");
    const shipButton = document.getElementById("starships");

    peopleButton.addEventListener("click", function() {
        window.location.assign("people.html")
    })
    planetButton.addEventListener("click", function(){
        window.location.assign("planets.html")
    })
    shipButton.addEventListener("click", function(){
        window.location.assign("starships.html")
    })
  
})