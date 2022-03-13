import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 5 },
      { id: 2, name: "Running", count: 1 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map( item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      } else {
        return item;
      }
    });
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const habitsCount = habits[index].count - 1;
    habits[index].count = habitsCount < 1 ? 0 : habitsCount;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    this.setState({habits: habits});
  }

  handleReset = ()=> {
    const habits = this.state.habits.map( item => {
      item.count = 0;
      return item;
    });
    this.setState({habits});
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          onReset={this.handleReset}
          onAdd={this.handleAdd}
          habits={this.state.habits}
          key={this.state.habits.id}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
