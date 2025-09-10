function isPalindrome(word){
    let cleanWord = word.toLowerCase();

    let reverseWord = cleanWord.split("").reverse().join("");

    return cleanWord === reverseWord;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("Palindrome"))