"use client";

import { useState } from "react";

export default function CheckTicketPage() {
  const [numbers, setNumbers] = useState(["", "", "", "", ""]);
  const [result, setResult] = useState("");

  function handleChange(index, value) {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const ticketNumbers = numbers.map(Number);

    const response = await fetch("/api/checkticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numbers: ticketNumbers,
      }),
    });

    const data = await response.json();

    setResult(`Matches: ${data.matches}, Prize: ${data.prize}`);
  }

  return (
    <main>
      <h1>Check Ticket</h1>

      <form onSubmit={handleSubmit}>
        {numbers.map((number, index) => (
          <div key={index}>
            <label>Number {index + 1}: </label>
            <input
              type="number"
              min="1"
              max="15"
              value={number}
              onChange={(event) => handleChange(index, event.target.value)}
            />
          </div>
        ))}

        <button type="submit">Check Ticket</button>
      </form>

      {result && <h2>{result}</h2>}
    </main>
  );
}