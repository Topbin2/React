import React, { Component, createRef, useRef } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  
  onSubmit = (event)=> {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value ='';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" placeholder="Habit" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
