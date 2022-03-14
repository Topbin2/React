import React from "react";
import Habit from "./Habit";

const Habits = (props) => {
  return (
    <>
      {props.habits.map((habit) => (
        <Habit
          key={habit.id}
          habits={habit}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        />
      ))}
    </>
  );
};

export default Habits;
