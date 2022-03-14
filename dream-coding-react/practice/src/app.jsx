import React, { useState } from "react";
import Habits from "./components/Habits";
import Header from "./components/Header";
import Form from "./components/Form";
import "./app.css";

let nextId = 4;
const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Gaming", count: 0 },
  ]);

  const handleIncrement = (habit) => {
    const array = [...habits];
    const index = array.indexOf(habit);
    array[index].count++;
    setHabits(array);
  };
  
  const handleDecrement = (habit) => {
    const array = [...habits];
    const index = array.indexOf(habit);
    const count = array[index].count - 1;
    array[index].count = count < 0 ? 0 : count;
    setHabits(array);
  };
  
  const handleDelete = (habit) => {
    const array = habits.filter((item) => item.id !== habit.id);
    setHabits(array);
  };

  const handleSubmit = (text) => {
    nextId++;
    const array = [...habits];
    const array2 = {id: nextId, name: text, count: 0};
    const array3 = array.concat(array2);
    setHabits(array3);
  }

  

  return (
    <>
      <Header habits={habits} />
      <Form onSubmit={handleSubmit} />
      <Habits
        key={habits.id}
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
