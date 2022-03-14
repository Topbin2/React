import React, { useState } from 'react';
import './habit.css';

  
const Habit = (props) => {
    const [num, setNum] = useState(props.count);

    const clickHandler = ()=> {
        setNum(num + 1);
        console.log(num);
    };

    return (
        <div className="container">
            <div>{props.name}</div>
            <div>{num}</div>
            <button onClick={clickHandler}>+</button>
            <button>-</button>
            <button>x</button>
        </div>
    );
};

export default Habit;