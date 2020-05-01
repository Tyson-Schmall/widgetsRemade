import React, { useState } from "react";

export default function EvenOrOdd() {
  const [number, setNumber] = useState("");
  const [evenOrOdd, setEvenOrOdd] = useState("Even or Odd?");

  const checkEvenOrOdd = () => {
    if (number % 2 === 0) {
      setEvenOrOdd("The number is even");
    } else if (typeof number === "string") {
      setEvenOrOdd("The entry must be a number");
    } else {
      setEvenOrOdd("The number is odd");
    }
  };

  const handleReset = () => {
    setNumber("");
    setEvenOrOdd("Even or Odd?");
  };

  return (
    <div className="even-or-odd-wrapper">
      <div className="even-or-odd">
        <div>
          <div className="even-or-odd-items">
            <h1>{evenOrOdd}</h1>
          </div>

          <div className="even-or-odd-items">
            <input
              placeholder="Enter a number here"
              onChange={(e) => setNumber(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="even-or-odd-items">
          <button className="btn" onClick={() => checkEvenOrOdd()}>
            Check Entry
          </button>
        </div>

        <div className="even-or-odd-items">
          <button className="btn" onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
