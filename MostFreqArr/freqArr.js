function mostFrequent(arr){
    const counts = {};
    let maxCount = 0;
    let mostFrequent = 0

    for(const num of arr){
        counts[num] = (counts[num] || 0) + 1;
        if(counts[num] > maxCount){
            maxCount = counts[num];
            mostFrequent = num;
        }
    }
    return mostFrequent;
}


let arr = [2,2,2,4,1,2,6,87,34,4]

console.log(mostFrequent(arr))