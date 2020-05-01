import React, { useState } from "react";

export default function YearBorn() {
  const [year, setYear] = useState(2020);
  const [age, setAge] = useState("");

  const handleEquate = () => {
    setYear(`The corresponding year of birth is: ${year - age}`);
  };

  const handleReset = () => {
    setYear(2020);
    setAge("");
  };

  return (
    <div className="year-born-wrapper">
      <div className="year-born">
        <div>
          <div className="year-born-items">
            <h1>{year}</h1>
          </div>

          <div className="year-born-items">
            <input
              onChange={(e) => setAge(e.target.value)}
              type="text"
              placeholder="Enter an age"
            />
          </div>
        </div>

        <div className="year-born-items">
          <button className="btn" onClick={() => handleEquate()}>
            Calculate Year of Birth
          </button>
        </div>
        <div className="year-born-items">
          <button className="btn" onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
