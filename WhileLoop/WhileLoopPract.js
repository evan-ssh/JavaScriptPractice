//While loop = Repeat some code While a condition is true

let username = "";

while (username === "" || username === null) {
    username = prompt('Enter username')
}
console.log(`Hello ${username}`);