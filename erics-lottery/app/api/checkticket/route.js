function generateWinningNumbers(){
    const numbers = []

    while(numbers.length < 5){
        const randomNumber = Math.floor(Math.random() * 15) + 1;

        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber);
        } //No duplicates

    }
    return numbers
}

const winningNumbers = generateWinningNumbers();
console.log("Winning numbers ",winningNumbers)

export async function POST(request){
    const body = await request.json();

    const ticketNumbers = body.numbers;

    const matches = ticketNumbers.filter((number) => winningNumbers.includes(Number(number))).length

    let prize;

    if (matches === 0) {
        prize = "You Lose";
      } else if (matches === 1) {
        prize = "$5";
      } else if (matches === 2) {
        prize = "$10";
      } else if (matches === 3) {
        prize = "$15";
      } else if (matches === 4) {
        prize = "$100";
      } else {
        prize = "$100000";
      }

    return Response.json({
        matches: matches,
        prize: prize,
    })
}