import React, { Component } from "react";

import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  render() {
    return (
      <>
        <nav className="nav">
          <div className="leaf-icon">
            <i className="fa-solid fa-leaf"></i>
          </div>
          <h1 className="title">Habit Tracker</h1>
          <p className="main-count">
            {this.state.habits.length}
          </p>
        </nav>

        <form>
          <input type="text"  placeholder="Habit" />
          <button type="submit">Add</button>
        </form>

        <Habits />
        <button className='resetBtn'>Reset All</button>
      </>
    );
  }
}

export default App;
