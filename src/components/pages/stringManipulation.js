import React, { useState } from "react";

export default function StringManip() {
  const [words, setWords] = useState(
    "Your sentence will render here, missing it's first and last character."
  );
  const [input, setInput] = useState("");

  const removeLetters = () => {
    setWords(input.slice(1, -1));
  };

  const handleReset = () => {
    setWords(
      "Your sentence will render here, missing it's first and last character."
    );
  };

  return (
    <div className="string-manip-wrapper">
      <div className="string-manip">
        <div>
          <div classname="string-manip-items">
            <h1>{words}</h1>
          </div>

          <div className="string-manip-items">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter your sentence or word here"
              name="userInput"
            />
          </div>
        </div>

        <div className="string-manip-items">
          <button className="btn" onClick={() => removeLetters()} type="submit">
            Manipulate
          </button>
        </div>

        <div className="string-manip-items">
          <button className="btn" onClick={() => handleReset()} type="submit">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
