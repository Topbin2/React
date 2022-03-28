import React, { useState, useReducer } from "react";
import "./App.css";

const countReducer = (state, action) => {
  if(action.type === "UP") {
    return state + action.number;
  } else if(action.type === "DOWN") {
    return state - action.number;
  } else if(action.type === "RESET") {
    return 0;
  }
}

function App() {
  const [number, setNumber] = useState(0);
  const [count, countDispatch] = useReducer(countReducer, 0);

  const up = () => {
    countDispatch({ type: "UP", number: number });
  };

  const down = () => {
    countDispatch({ type: "DOWN", number: number });
  };

  const reset = () => {
    countDispatch({ type: "RESET", number: number });
  };

  const changeNumber = (e) => {
    setNumber(Number(e.target.value));
  };

  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="number" value={number} onChange={changeNumber} />
      <div>{count}</div>
    </div>
  );
}

export default App;
