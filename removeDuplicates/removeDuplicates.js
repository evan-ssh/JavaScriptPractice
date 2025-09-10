function removeDuplicates(word){
    let finalWord = "";
    for (let char of word){
        if(!finalWord.includes(char)){
            result += char;
        }
    }
    return finalWord;
}

console.log(removeDuplicates("hello")); 
console.log(removeDuplicates("racecar")); 
