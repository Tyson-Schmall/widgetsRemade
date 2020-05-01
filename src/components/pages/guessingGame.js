import React, { useState } from "react";

export default function Guessing() {
  const [num, setNum] = useState(17);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleGuess = () => {
    if (input == num) {
      setResult("You win");
    } else {
      setResult("Your guess was incorrect..you lose");
    }
  };

  const handleReset = () => {
    setResult("");
    setInput("");
    setNum(17);
  };

  return (
    <div className="guessing-game-wrapper">
      <div className="guessing-game">
        <div>
          <div className="guessing-game-items">
            <h1>{result}</h1>
          </div>

          <div className="guessing-game-items">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Guess the number I am thinking.."
            />
          </div>
        </div>

        <div className="guessing-game-items">
          <button className="btn" onClick={() => handleGuess()}>
            Submit
          </button>
        </div>
        <div className="guessing-game-items">
          <button className="btn" onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
