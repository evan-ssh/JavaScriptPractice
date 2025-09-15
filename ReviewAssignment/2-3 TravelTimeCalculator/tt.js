function calcTime(distance,speed){
    const totalTime = distance / speed

    const hours = Math.floor(totalTime)
    const minutes = ((totalTime - hours) * 60).toFixed(0)
    alert(`Distance: ${distance}\nSpeed: ${speed}MPH\nTravel Time: ${hours}hours, ${minutes}minutes`)
}


let distance = parseFloat(prompt("Enter distance travelled in miles"))
let speed = parseFloat(prompt("Enter average speed in MPH"))
calcTime(distance,speed)
