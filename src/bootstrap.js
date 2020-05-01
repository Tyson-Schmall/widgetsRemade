import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";

import App from "./components/app";
import EvenOrOdd from "./components/pages/evenOrOdd";
import FizzBuzz from "./components/pages/fizzBuzz";
import StringManip from "./components/pages/stringManipulation";
import YearBorn from "./components/pages/yearBorn";
import GuessingGame from "./components/pages/guessingGame";
import "./style/main.scss";

const routes = {
  "/": () => <App />,
  "/evenOrOdd": () => <EvenOrOdd />,
  "/fizzBuzz": () => <FizzBuzz />,
  "/stringManipulation": () => <StringManip />,
  "/yearBorn": () => <YearBorn />,
  "/guessingGame": () => <GuessingGame />,
};

function Main() {
  return (
    <div>
      <div className="navbar">
        <A href="/">Home</A>
        <A href="/evenOrOdd">Even or Odd</A>
        <A href="/fizzBuzz">Fizz Buzz</A>
        <A href="/stringManipulation">String Manipulation</A>
        <A href="/yearBorn">Year Born</A>
        <A href="/guessingGame">Guessing Game</A>
      </div>
      <hr />
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));
