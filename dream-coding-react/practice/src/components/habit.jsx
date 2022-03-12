import React, { Component } from 'react';
import './habit.css';

class Habit extends Component {
    render() {
        return (
          <div className='container'>
            <span className="title">{this.props.name}</span>
            <span className="count">{this.props.count}</span>
            <button className="increase">+</button>
            <button className="decrease">-</button>
            <button className="remove">x</button>
          </div>
        );
    }
}


export default Habit;
