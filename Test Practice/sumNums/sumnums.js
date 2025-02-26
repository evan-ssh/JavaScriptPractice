do{
    let numbers = []
    let total = 0
    let number = parseInt(prompt("Enter a number 1-100"))
    if(number < 0 || number > 100){
        continue;
    }
    for(let i = 1; i <= number; i++){
        numbers.push(i)
    }
    for(num of numbers){
        total += num   
    }
    document.write(`The sum of the numbers from 1 to ${number} is ${total}<br><br>`)
    let go_again = prompt("Do another sum?") 
    if(go_again != `y`){
        break   

    }
         
}while(true)