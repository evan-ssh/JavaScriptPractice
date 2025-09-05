function calculateTime(miles,mph){
    let totalTime = miles/mph
    let hours = Math.floor(totalTime)
    let minutes = ((totalTime - hours) * 60).toFixed(0)
    alert(`Total miles travelled: ${miles}\nAverage Speed: ${mph}\nEstimated Time: ${hours}h ${minutes}m`)
}

let miles = parseInt(prompt("Enter miles traveled"))
let mph = parseInt(prompt("Enter average speed"))
calculateTime(miles,mph)