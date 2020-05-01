import React, { useState } from "react";

export default function FizzBuzz() {
  const [number, setNumber] = useState(1);
  const [fizz, setFizz] = useState("Fizz");
  const [buzz, setBuzz] = useState("Buzz");
  const [fizzBuzz, setFizzBuzz] = useState("FizzBuzz");

  const handleIncreaseButton = () => {
    setNumber(number + 1);
  };

  const handleDecreaseButton = () => {
    setNumber(number - 1);
  };

  const currentDisplay = () => {
    if (number % 3 === 0 && number % 5 === 0) {
      return fizzBuzz;
    } else if (number % 5 == 0) {
      return buzz;
    } else if (number % 3 === 0) {
      return fizz;
    } else {
      return number;
    }
  };

  return (
    <div className="fizz-buzz-wrapper">
      <div className="fizz-buzz">
        <div classname="fizz-buzz-items">
          <h1>{currentDisplay()}</h1>
        </div>

        <div className="fizz-buzz-items">
          <button className="btn" onClick={() => handleIncreaseButton()}>
            Increase
          </button>
        </div>
        <div className="fizz-buzz-items">
          <button className="btn" onClick={() => handleDecreaseButton()}>
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
