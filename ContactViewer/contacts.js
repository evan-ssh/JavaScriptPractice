"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];


function displayMenu(){
    return "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

}

while(true){
   let command = prompt(displayMenu())
   if(command == "list"){
    contacts.forEach(contact =>{
        let [num,name,email,phone] = contact.split("|")
        alert(name)
    })
   }
}