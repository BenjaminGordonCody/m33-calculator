import React from "react";
import { useState } from "react";
import { Math } from "mathjs";

const Calculator = (args) => {
  // set and get functions
  const [memory, setMemory] = useState([]);
  const [display, setDisplay] = useState("");
  const appendMemory = (item) => {
    memory.push(item);
    setMemory(memory);
    console.log(memory);
    setDisplay(memory.join(""));
  };

  // button making functions
  const getNumberButton = (number) => {
    return (
      <button
        key={number + "button"}
        className="number"
        onClick={() => {
          appendMemory(number);
        }}
      >
        {number}
      </button>
    );
  };

  const getOperationButton = (operation) => {
    return (
      <button
        key={operation + "button"}
        className="operation"
        onClick={() => {
          appendMemory(operation);
        }}
      >
        {operation}
      </button>
    );
  };

  const getEqualsButton = () => {
    return (
      <button
        className="otherButton"
        onClick={() => {
          let expression = memory.join("");
          let result = Math.evaluate(expression);
          setMemory([result]);
          setDisplay(result);
        }}
      >
        =
      </button>
    );
  };

  const getClearButton = () => {
    return (
      <button
        className="otherButton"
        onClick={() => {
          setMemory([]);
          setDisplay("");
        }}
      >
        C
      </button>
    );
  };

  // buttons we'll use
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
  const operations = ["+", "-", "*", "/"];

  return (
    <div id="background">
      <div id="memory">{display}</div>
      <div id="buttons">
        {/* number buttons */}
        <div id="numbers">
          {numbers.map((number) => getNumberButton(number))}
        </div>

        {/* Operation buttons */}
        <div id="operations">
          {operations.map((operation) => getOperationButton(operation))}
        </div>

        {/* Other Buttons */}
        <div id="otherButtons">
          {getEqualsButton()}
          {getClearButton()}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
