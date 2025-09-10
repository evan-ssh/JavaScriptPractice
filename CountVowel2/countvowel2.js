function countVowels(word){
    let vowels = "aeiou"
    let count = 0

    let cleanWord = word.toLowerCase()
    for(let i = 0; i < cleanWord.length; i++){
        if(vowels.includes(cleanWord[i])){
            count ++;
        }
    } 

    return count;
}


console.log(countVowels("hello"))

console.log(countVowels("Java"))