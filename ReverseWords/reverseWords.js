let sentence = prompt("Enter a sentence to reverse: ")

let words = sentence.split(" ")

let reversedSentence = [];

for(let i = 0; i < words.length; i++){
    let word = words[i];
    let reversedWord = word.split("").reverse().join("")
    reversedSentence.push(reversedWord);
}

let result = reversedSentence.join(" ");
console.log(result);

