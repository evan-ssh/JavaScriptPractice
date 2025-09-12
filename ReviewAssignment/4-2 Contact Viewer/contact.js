"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

while(true){
    let command = prompt(menuString).trim().toLowerCase()
    if(command == "list"){
        let contactInfo = ""
        for(let i = 0; i < contacts.length; i++){
            let contact = contacts[i].split("|")
            contactInfo += `${contact[0]} - ${contact[1]}\n`
        }
        alert(contactInfo)    
    }else if(command.startsWith("get ")){
        let commandNum = command.split(" ")
        let contactNum = commandNum[1]
        if(!contactNum.trim() || isNaN(contactNum)){
            alert("Invalid Command")
            continue       
        }
        let contactFound = false;
        for(let i = 0; i < contacts.length; i++){
            let contact = contacts[i].split("|")
            if(contactNum == contact[0]){
                alert(`Contact info for ${contact[1]}\nEmail: ${contact[2]}\nPhone: ${contact[3]}`)
                contactFound = true;
                break
            }
        } 
        if(!contactFound){
            alert(`No data for #${commandNum[1]}`)
        }
    }else if(command == "exit"){
        alert("Exiting Contact Viewer")
        break;
    }else{
        alert("Invalid command")
    }
}




