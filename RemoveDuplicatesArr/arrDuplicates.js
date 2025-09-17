function removeDuplicates(arr){
    cleanedArr = []
    for(let i = 0; i < arr.length; i++){
        if(!cleanedArr.find(num => num === arr[i])){
            cleanedArr.push(arr[i])
        }
    }
    return cleanedArr
}



let arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));