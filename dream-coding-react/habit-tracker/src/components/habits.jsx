import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 5 },
      { id: 2, name: "Running", count: 1 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits: habits});
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const habitsCount = habits[index].count - 1;
    habits[index].count = habitsCount < 1 ? 0 : habitsCount;
    console.log(habits[index].count);
    this.setState({habits: habits});
  };

  handleDelete = (habit) => {
    console.log(3);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
