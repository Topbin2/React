import React from "react";

const Habit = (props) => {
    const handleIncrement = () => {
        props.onIncrement(props.habits);
      };
      const handleDecrement = () => {
        props.onDecrement(props.habits);
      };
      const handleDelete = () => {
        props.onDelete(props.habits);
      };


  return (
    <div className="container">
      <span className="habit-name">{props.habits.name}</span>
      <span className="habit-count">{props.habits.count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleDelete}>x</button>
    </div>
  );
};

export default Habit;
