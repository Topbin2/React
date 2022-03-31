import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunction : number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
      <hr />
      <button onClick={someFunction}>Call someFunction</button>
    </div>
  );
}

export default App;
