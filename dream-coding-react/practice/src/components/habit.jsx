import React, { Component } from "react";

class Habit extends Component {
  
  render() {
    const {name, count} = this.props.habit;
    return (
      <div className="container">
        <span className="title">{name}</span>
        <span className="count">{count}</span>
        <button className="increase" onClick={ () => this.props.onIncrement(this.props.habit) }>
          +
        </button>
        <button className="decrease" onClick={ () => this.props.onDecrement(this.props.habit)}>
          -
        </button>
        <button className="remove" onClick={ () => this.props.onDelete(this.props.habit)}>x</button>
      </div>
    );
  }
}

export default Habit;
