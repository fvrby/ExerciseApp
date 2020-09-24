import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Calculator() {
  const [dataA, setDataA] = useState([0]);
  const [dataB, setDataB] = useState(undefined);
  const [operator, setOperator] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [screen, setScreen] = useState([0]);
  const [equal, setEqual] = useState(false);
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button onClick={(e) => insertNumbers(e)} value={item} key={item}>
        {" "}
        {item}
      </button>
    );
  });

  const insertNumbers = (e) => {
    if (equal === true) {
      setEqual(false);
      setDataA([result]);
    }
    if (operator === undefined) {
      setDataA(dataA[0] !== 0 ? [...dataA, e.target.value] : [e.target.value]);
      setScreen(dataA[0] !== 0 ? [...dataA, e.target.value] : [e.target.value]);
    } else {
      setDataB(
        dataB !== undefined ? [...dataB, e.target.value] : [e.target.value]
      );
      setScreen(
        dataB !== undefined ? [...dataB, e.target.value] : [e.target.value]
      );
    }
  };

  const setTotal = () => {
    setResult(eval(result));
    setScreen(eval(result));
    setEqual(true);
    setDataB(undefined);
    setOperator(undefined);
  };

  const handleClear = () => {
    if (dataB !== undefined) {
      setDataB(undefined);
      setOperator(undefined);
      setScreen(dataA);
    } else {
      setOperator(undefined);
    }
  };

  const handleAc = () => {
    setOperator(undefined);
    setResult(undefined);
    setEqual(false);
    setDataA([0]);
    setDataB(undefined);
    setScreen(0);
  };

  useEffect(() => {
    if (operator !== undefined && dataB !== undefined && equal === false) {
      setResult(`${dataA.join("")} ${operator} ${dataB.join("")}`);
    }
  }, [operator, dataA, dataB, equal]);
  return (
    <div className="outline">
      {" "}
      <div className="input">{screen}</div>
      <div className="digits">{calcBtns}</div>
      {/* First Grid */}
      <div className="First subgrid">
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleAc()}>AC</button>
      </div>
      {/* Second Grid */}
      <div className="Second subgrid">
        <button onClick={(e) => setOperator(e.target.value)} value="+">
          +
        </button>
        <button onClick={(e) => setOperator(e.target.value)} value="-">
          -
        </button>
        <button onClick={(e) => setOperator(e.target.value)} value="*">
          *
        </button>
        <button onClick={(e) => setOperator(e.target.value)} value="/">
          /
        </button>
        {/* Final Score button */}
        <button onClick={() => setTotal()} value="=">
          =
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);
