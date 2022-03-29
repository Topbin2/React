import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>useReducer 은행에 오신것을 환영합니다</h1>
      <p>잔고: ?원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button>예금</button>
      <button>출금</button>
    </div>
  );
}

export default App;
