document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event){
        const username = document.getElementById("username").value 
        const password = document.getElementById("password").value
        const email = document.getElementById("email").value

        if(username.length === 0){
            alert("Username cannot be empty");
            event.preventDefault();
            return
        }
        if(password.length <= 5){
            alert("Make password longer");
            event.preventDefault();
            return
        }
        if(email.length <= 5){
            alert("Invalid Email ");
            event.preventDefault();
            return
        }
        if (!email.includes("@")) {
            alert("Invalid email");
            event.preventDefault();
            return;
        }
    })
})