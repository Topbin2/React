import React, { Component } from "react";

import Habit from "./habit";

class Habits extends Component {
  render() {

    return (
      <ul>
        {this.props.habit.map((data) => (
          <Habit
            habit={data}
            name={data.name}
            count={data.count}
            key={data.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
