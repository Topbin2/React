import React, { Component } from "react";

import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import HabitAddForm from "./components/habitAddForm";

class App extends Component {
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

  submitHandler = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0}];
    this.setState({habits});
  }
  
  render() {
    return (
      <>
        <Navbar habit={this.state.habits} totalCount={this.state.habits.filter( item => item.count > 0).length}/>
        <HabitAddForm onAdd={this.submitHandler} />
        <Habits
          habit={this.state.habits}
          name={this.state.habits.name}
          count={this.state.habits.count}
          key={this.state.habits.id}
          onIncrement={this.IncrementHandler}
          onDecrement={this.DecrementHandler}
          onDelete={this.DeleteHandler}
        />
        <button className="resetBtn">Reset All</button>
      </>
    );
  }
}

export default App;
