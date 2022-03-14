import React from "react";
import Habit from "./habit";

const Habits = (props) => {

  return (
    <>
      {props.habits.map((item) => (
        <Habit key={item.id} name={item.name} count={item.count}/>
      ))}
    </>
  );
};

export default Habits;
