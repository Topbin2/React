import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="leaf-icon">
          <i className="fa-solid fa-leaf"></i>
        </div>
        <h1 className="title">Habit Tracker</h1>
        <p className="main-count">0</p>
      </nav>
    );
  }
}

export default Navbar;
