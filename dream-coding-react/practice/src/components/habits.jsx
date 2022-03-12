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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  }

  DecrementHandler = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  }

  DeleteHandler = (habit) => {
    const habits = this.state.habits.filter( item => item.id !== habit.id);
    this.setState({habits});
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
