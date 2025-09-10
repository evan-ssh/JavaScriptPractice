function isAnagram(words1, words2){

    //Clean both strings to ensure easy comparasion
    const cleanWords1 = words1.replace(/\s+/g, "").toLowerCase()
    const cleanWords2 = words2.replace(/\s+/g, "").toLowerCase()

    //sort the strings common for str problems
    const sortWords1 = cleanWords1.split("").sort().join("")
    const sortWords2 = cleanWords2.split("").sort().join("")

    return sortWords1 === sortWords2;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'racecar'));