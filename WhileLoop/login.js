let loggedIN = false;
let username;
let password;

while(!loggedIN){
    username = window.prompt('Enter username');
    password = window.prompt('Enter password');

    if(username === "myUsername" && password == "myPassword"){
        loggedIN = true;
        console.log('You are logged in');
    }
    else{
        console.log("Invalid Credential! Please try again")
    }
    
}