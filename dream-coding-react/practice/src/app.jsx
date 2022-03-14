import React, { useState } from "react";
import Header from "./components/header";
import Habits from "./components/habits";

const data = [
  { id: 1, name: "Reading", count: 0 },
  { id: 2, name: "Running", count: 0 },
  { id: 3, name: "Coding", count: 0 },
];

const App = () => {
 const [habits, setHabits] = useState(data);

  return (
    <>
      <Header />
      <Habits habits={habits}/>
    </>
  );
};

export default App;
