function chunkArray(arr,size){
    const splitArr = []
    for(let i = 0; i < arr.length; i++)
        if(i % size === 0){
            splitArr.push(arr.slice(i, i + size))
        }
    
    return splitArr;
}

chunkArray([1,2,3,4,5,6,7], 3) 