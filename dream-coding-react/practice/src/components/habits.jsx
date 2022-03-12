import React, { Component } from "react";

import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  IncrementHandler = (habit) => {
    this.setState({count: habit.count += 1})
  }

  DecrementHandler = (habit) => {
    this.setState({count: habit.count < 1 ? 0 : habit.count -= 1})
  }

  DeleteHandler = (habit) => {
    this.setState(this.state.habits.splice(habit, 1));
  }

  render() {
    return this.state.habits.map((data) => (
      <Habit
        habit={data}
        name={data.name}
        count={data.count}
        key={data.id}
        onIncrement={this.IncrementHandler}
        onDecrement={this.DecrementHandler}
        onDelete={this.DeleteHandler}
      />
    ));
  }
}

export default Habits;
