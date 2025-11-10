const grades = [
    [88, 92, 79],   // Alice
    [95, 85, 91],   // Bob
    [70, 80, 65],   // Charlie
    [100, 98, 99]   // Dana
];


const avgs = grades.map(arr => {
    let total = arr.reduce((sum, grade) => sum + grade,0)
    return total / arr.length
})


const sortedGrades = avgs
    .map((avg, idx) => [avg, idx])      // Pair average with index
    .sort((a, b) => b[0] - a[0])        // Sort by average descending
    .map(pair => pair[1]);              // Get sorted indexes

console.log("Studnets sorted by average: ");
sortedGrades.forEach(idx => {
    console.log(`${names[idx]}: ${avgs[idx].toFixed(2)}`);
});

console.log("\n Top Students (avg >= 80):");
sortedGrades.forEach(idx => {
    if(avgs[idx] >= 80){
        console.log(`${names[idx]}: ${avgs[idx].toFixed(2)}`);  
    }
})

