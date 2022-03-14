import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>Habit Tracker</h1>
      <span>{props.habits.length}</span>
    </header>
  );
};

export default Header;
