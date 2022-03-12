import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.handleIncrement}
              onDecrement={this.props.handleDecrement}
              onDelete={this.props.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
