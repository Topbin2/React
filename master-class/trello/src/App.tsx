import React from "react";
import { useRecoilState } from "recoil";
import "./App.css";

import { minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div className="App">
      <input
        value={minutes}
        type="number"
        placeholder="Minutes"
        onChange={onMinutesChange}
      />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
