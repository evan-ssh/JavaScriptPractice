let i = 0

do {
    console.log(i)
    i ++//i++ is a post-increment operator, increment by 1
}while (i < 5);

do{
    console.log(i)
    i += 2
}while (i < 6);

i = 10;
do {
    console.log(i)
    i --
}while (i > 0)

do { 
    console.log(i)
    i -= 2 // post decrement operator
}while (i > 0)

while (i > 0){
    console.log(i)
    i --
}

while (i > 50){
    console.log(i)
    i ++
}
    