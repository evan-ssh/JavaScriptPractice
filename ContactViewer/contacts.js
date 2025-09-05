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
   if(command == null){
    window.close();
    break;
   }
   if(command == "exit"){
        break
   }else if(command == "list"){
    let contactNames = []
    contacts.forEach(contact =>{
        contactNames.push(contact.split("|")[1]);
    });
   alert(contactNames.join("\n"));
   }else if(command.startsWith("get ")){
    let number = command.split(" ")[1];
    let contact = contacts.find(c => c.startsWith(number + "|"))
    if(contact){
        let details = contact.split("|");
        alert(`Name: ${details[1]}\nEmail: ${details[2]}\nPhone: ${details[3]} `);
    }
   }
}

