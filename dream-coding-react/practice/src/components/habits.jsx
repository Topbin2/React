import React, { Component } from "react";

import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 22 },
      { id: 2, name: "Running", count: 1 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  render() {
    return this.state.habits.map((data) => (
      <Habit name={data.name} count={data.count} key={data.id} />
    ));
  }
}

export default Habits;
