function capitalizeEachWord(sentence){
    const words = sentence.split(" ")
    for(let i = 0; i < words.length; i++){
        //words[i].slice(1) slices the word so u get every letter after the first
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    //join back together 
    return words.join(" ")
}