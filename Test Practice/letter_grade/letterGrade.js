

do{
    let grade = parseInt(prompt("Enter number grade from 0 through 100\n or enter 999 to end"))
    if(grade == 999){
        break
    }
    if(grade < 0 || grade > 100){
        alert(`Enter a valid number`)
        continue
    }
    if (grade > 0 && grade < 60){
        lettergrade = `F`
    }else if(grade > 60 && grade <= 67){
        lettergrade = `D`
    }else if(grade > 67 && grade <= 79){
        lettergrade = `C`
    }else if(grade > 80 && grade <= 87){
        lettergrade = `B`
    }
    
    document.write(`Grade${grade} = ${lettergrade}<br>`)

}while(true)
